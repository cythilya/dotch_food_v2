import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { fetchSlidesData } from '../actions';
import '../../style/components/slideshow.css';

const SLIDEHSOW_WIDTH = 720;

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      start: null,
      isPause: false,
      isReset: false,
      resetIndex: null,
    };

    this.clickDotHandler = this.clickDotHandler.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.clickForwardHandler = this.clickForwardHandler.bind(this);
    this.clickBackwardHandler = this.clickBackwardHandler.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this.renderSlideshow = this.renderSlideshow.bind(this);
    this.renderControlDots = this.renderControlDots.bind(this);
    this.tick = this.tick.bind(this);
    this.timer = requestAnimationFrame(this.tick);
  }

  componentDidMount() {
    const { fetchSlidesData } = this.props;
    fetchSlidesData();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timer);
  }

  onMouseEnterHandler() {
    this.setState({ isPause: true });
  }

  onMouseLeaveHandler() {
    this.setState({ isPause: false });
  }

  clickDotHandler(index) {
    this._resetTickIndex(index);
  }

  clickForwardHandler() {
    const { slideshows } = this.props;
    const { index } = this.state;
    const maxIndex = slideshows.length - 1;
    let nextIndex = index + 1;

    nextIndex = nextIndex > maxIndex ? maxIndex : nextIndex;
    this._resetTickIndex(nextIndex);
  }

  clickBackwardHandler() {
    const { index } = this.state;
    let nextIndex = index - 1;

    nextIndex = nextIndex < 0 ? 0 : nextIndex;
    this._resetTickIndex(nextIndex);
  }

  _resetTickIndex(index) {
    cancelAnimationFrame(this.timer);

    this.setState({
      resetIndex: index,
      isReset: true,
    });

    this.timer = requestAnimationFrame(this.tick);
  }

  tick(timestamp) {
    const {
      slideshows,
      interval,
      pause,
      auto,
    } = this.props;
    const {
      index,
      start,
      isPause,
      isReset,
      resetIndex,
    } = this.state;
    const progress = timestamp - start;
    let nextIndex = index;

    if (start === null) {
      this.setState({ start: timestamp });
    }

    if ((progress < interval || isPause || !auto) && !isReset) {
      this.timer = requestAnimationFrame(this.tick);
    } else {
      if (index < slideshows.length - 1) {
        nextIndex = isReset && (resetIndex !== null) ? resetIndex : (index + 1);
      } else { // index === length - 1
        nextIndex = isReset && (resetIndex !== null) ? resetIndex : 0;
      }

      const targetWidth = SLIDEHSOW_WIDTH * nextIndex;
      this._ref.style.transform = `translateX(-${targetWidth}px)`;
      this.setState({
        index: nextIndex,
        start: timestamp + pause,
        isReset: false,
        resetIndex: null,
      });
      this.timer = requestAnimationFrame(this.tick);
    }
  }

  renderLoading() {
    return (
      <div styleName="slideshow__loading">
        <Loader active inline="centered" />
      </div>
    );
  }

  renderSlideshow(isChrome) {
    const { slideshows } = this.props;

    return _.map(slideshows, (item) => {
      return (
        <div
          styleName="slideshow__item"
          title={item.title}
          key={item.id}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <Link
            to={item.link}
            target="_blank"
          >
            {
              isChrome
              && (
              <img
                alt={item.title}
                src={item.imageWebp}
              />
              )
            }
            {
              !isChrome
              && (
              <img
                alt={item.title}
                src={item.image}
              />
              )
            }
          </Link>
        </div>
      );
    });
  }

  renderControlDots() {
    const { slideshows } = this.props;
    const { index } = this.state;

    return _.map(slideshows, (item, key) => {
      const activeClass = index === key ? 'slideshow__dot--active' : '';

      return (
        <div
          styleName={`slideshow__dot ${activeClass}`}
          key={item.id}
          onClick={() => this.clickDotHandler(key)}
          onKeyPress={() => this.clickDotHandler(key)}
        />
      );
    });
  }

  render() {
    const { slideshows } = this.props;
    const count = slideshows.length;
    const controlWidth = count * 20;
    const leftMargin = (window.innerWidth - controlWidth) / 2;
    const arrowPos = (window.innerWidth - 720) / 2;
    const isLoading = _.isObject(slideshows) && !_.isArray(slideshows) && _.isEmpty(slideshows);
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    const dotsStyles = {
      width: `${controlWidth}px`,
      left: `${leftMargin}px`,
    };
    const arrowLeftStyle = {
      left: `${arrowPos}px`,
    };
    const arrowRightStyle = {
      right: `${arrowPos}px`,
    };

    return (
      <div>
        <div styleName="slideshow">
          <div
            ref={(ref) => { this._ref = ref; }}
            styleName="slideshow__container"
          >
            { this.renderSlideshow(isChrome) }
          </div>
          <div styleName="slideshow__control" style={dotsStyles}>
            { this.renderControlDots() }
          </div>
          <div
            styleName="slideshow__arrow-forward"
            style={arrowRightStyle}
            onClick={this.clickForwardHandler}
            onKeyPress={this.clickForwardHandler}
          />
          <div
            styleName="slideshow__arrow-backward"
            style={arrowLeftStyle}
            onClick={this.clickBackwardHandler}
            onKeyPress={this.clickBackwardHandler}
          />
          { isLoading && this.renderLoading() }
        </div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  fetchSlidesData: PropTypes.func.isRequired,
  slideshows: PropTypes.object,
  interval: PropTypes.number,
  pause: PropTypes.number,
  auto: PropTypes.bool,
};

Slideshow.defaultProps = {
  slideshows: {},
  interval: 1000,
  pause: 4000,
  auto: true,
};

function mapStateToProps({ slideshows }) {
  return {
    slideshows,
  };
}

export default connect(mapStateToProps, { fetchSlidesData })(Slideshow);
