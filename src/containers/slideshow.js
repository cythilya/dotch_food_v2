import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { fetchSlidesData } from '../actions';

const SLIDEHSOW_WIDTH = 720;

class Slideshow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      start: null,
      stop: false,
      isClick: false,
    };

    this.clickDotHandler = this.clickDotHandler.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.clickForwardHandler = this.clickForwardHandler.bind(this);
    this.clickBackwardHandler = this.clickBackwardHandler.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  }

  componentDidMount() {
    const { fetchSlidesData } = this.props;
    fetchSlidesData();
  }

  onMouseEnterHandler() {
    this.setState({ stop: true });
  }

  onMouseLeaveHandler() {
    this.setState({ stop: false });
  }

  clickDotHandler(index) {
    this.setState({
      index,
      isClick: true,
    });
  }

  clickForwardHandler() {
    const { index } = this.state;

    this.setState({
      index: index + 1,
      isClick: true,
    });
  }

  clickBackwardHandler() {
    const { index } = this.state;

    this.setState({
      index: index - 1,
      isClick: true,
    });
  }

  _tick(timestamp) {
    const {
      slideshows,
      interval,
      pause,
    } = this.props;
    const {
      index,
      start,
      stop,
      isClick,
    } = this.state;
    const progress = timestamp - start;
    let nextIndex = index;

    if (start === null) {
      this.setState({ start: timestamp });
    }

    if (progress < interval || stop) {
      this.timer = requestAnimationFrame(this._tick);
    } else {
      if (isClick) {
        this.setState({
          isClick: false,
        });
      } else if (index < slideshows.length - 1) {
        nextIndex = index + 1;
      } else {
        nextIndex = 0;
      }

      const targetWidth = SLIDEHSOW_WIDTH * nextIndex;
      this.refs.ref.style.transform = `translateX(-${targetWidth}px)`;
      this.setState({
        index: nextIndex,
        start: timestamp + pause,
      });
      this.timer = requestAnimationFrame(this._tick);
    }
  }

  renderLoading(isLoading) {
    const styles = isLoading ? 'show' : 'hide';

    return (
      <div className={`slideshow__loading ${styles}`}>
        <Loader active inline="centered" />
      </div>
    );
  }

  renderSlideshow() {
    const { slideshows } = this.props;

    return _.map(slideshows, (item) => {
      return (
        <div
          className="slideshow__item"
          title={item.title}
          key={item.id}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <Link
            to={item.link}
            target="_blank"
          >
            <image
              alt={item.title}
              src={item.image}
            />
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
          className={`slideshow__dot ${activeClass}`}
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
        <div className="slideshow">
          <div
            ref="ref"
            className="slideshow__container"
          >
            { this.renderSlideshow() }
          </div>
          <div className="slideshow__control" style={dotsStyles}>
            { this.renderControlDots() }
          </div>
          <div
            className="slideshow__arrow-forward"
            style={arrowRightStyle}
            onClick={this.clickForwardHandler}
            onKeyPress={this.clickForwardHandler}
          />
          <div
            className="slideshow__arrow-backward"
            style={arrowLeftStyle}
            onClick={this.clickBackwardHandler}
            onKeyPress={this.clickBackwardHandler}
          />
          { this.renderLoading(_.isObject(slideshows) && !_.isArray(slideshows) && _.isEmpty(slideshows)) }
        </div>
      </div>
    );
  }
}

Slideshow.propTypes = {
  fetchSlidesData: PropTypes.func.isRequired,
  slideshows: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.number,
  pause: PropTypes.number,
};

Slideshow.defaultProps = {
  interval: 1000,
  pause: 4000,
};

function mapStateToProps({ slideshows }) {
  return {
    slideshows,
  };
}

export default connect(mapStateToProps, { fetchSlidesData })(Slideshow);
