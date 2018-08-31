import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { fetchSlidesData } from '../actions/index';
import '../style/components/slideshow.css';

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
    const { dispatch } = this.props;
    dispatch(fetchSlidesData());
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
      <div className="icon-loading slideshow__loading" />
    );
  }

  renderSlideshow(slideshows) {
    return _.map(slideshows, (item) => {
      return (
        <div
          className="slideshow__item"
          title={item.title}
          key={item.id}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          <Link href={item.link}>
            <a
              title={item.title}
              target="_blank"
            >
              <LazyLoad offsetVertical={0} height={405}>
                <figure>
                  <picture>
                    <source
                      media="all"
                      srcSet={item.imageWebp}
                      type="image/webp"
                    />
                    <source
                      media="all"
                      srcSet={item.image}
                      type="image/jpeg"
                    />
                    <img src={item.image} alt={item.title} />
                  </picture>
                  <figcaption className="hide">
                    {item.title}
                  </figcaption>
                </figure>
              </LazyLoad>
            </a>
          </Link>
        </div>
      );
    });
  }

  renderControlDots(slideshows) {
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
    const { slidesData: slideshows } = this.props.slideshows;
    const count = _.size(slideshows);
    const controlWidth = count * 20;
    const leftMargin = (window.innerWidth - controlWidth) / 2;
    const arrowPos = (window.innerWidth - 720) / 2;
    const isLoading = _.isObject(slideshows) && !_.isArray(slideshows) && _.isEmpty(slideshows);
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
      <div className="slideshow">
        <div
          ref={(ref) => { this._ref = ref; }}
          className="slideshow__container"
        >
          { (count > 0) && this.renderSlideshow(slideshows) }
        </div>
        <div className="slideshow__control" style={dotsStyles}>
          { (count > 0) && this.renderControlDots(slideshows) }
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
        { isLoading && this.renderLoading() }
      </div>
    );
  }
}

Slideshow.propTypes = {
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

export default connect(state => state)(Slideshow);
