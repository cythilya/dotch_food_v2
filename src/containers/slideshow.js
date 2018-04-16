import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { fetchSlidesData } from '../actions';

const INTERVAL = 1000;
const WAIT_TIME = 4000;
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
    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  }

  componentDidMount() {
    this.fetchSlidesData();
  }

  fetchSlidesData() {
    this.props.fetchSlidesData();
  }

  renderLoading(isLoading) {
    return (
      <div className= { isLoading ? 'show' : 'hide'}>
        <Loader active inline='centered' />
      </div>
    );
  }

  renderSlideshow() {
    return _.map(this.props.slideshows, item => {
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
    return _.map(this.props.slideshows, (item, index) => {
      let activeClass = this.state.index === index ? 'slideshow__dot--active' : '';

      return (
        <div
          className={`slideshow__dot ${activeClass}`}
          key={item.id}
          onClick={() => this.clickDotHandler(index)}
        >
        </div>
      );
    });
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

  _tick(timestamp) {
    let progress = timestamp - this.state.start;

    if (this.state.start === null) {
      this.setState({ start: timestamp });
    }

    if (progress < INTERVAL || this.state.stop) {
      this.timer = requestAnimationFrame(this._tick);
    } else {
      let targetWidth = 0;

      if (this.state.isClick) {
        this.setState({
          index: this.state.index,
          isClick: false
        });
      } else if (this.state.index < this.props.slideshows.length - 1) {
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 0 });
      }

      targetWidth = SLIDEHSOW_WIDTH * this.state.index;
      this.refs.slideshowRef.style.transform = `translateX(-${targetWidth}px)`;
      this.setState({ start: timestamp + WAIT_TIME });
      this.timer = requestAnimationFrame(this._tick);
    }
  }

  render() {
    const { slidesData } = this.props;
    const count = this.props.slideshows.length;
    const controlWidth = count*20;
    const leftMargin = (window.innerWidth - controlWidth)/2;
    const styles = {
      width: `${controlWidth}px`,
      left: `${leftMargin}px`,
    };

    return(
      <div>
        <div className="slideshow" >
          <div
            ref="slideshowRef"
            className="slideshow__container"
          >
            { this.renderSlideshow() }
          </div>
          <div className="slideshow__control" style={styles}>
            { this.renderControlDots() }
          </div>
        </div>
        { this.renderLoading(_.isObject(slidesData) && !_.isArray(slidesData) && _.isEmpty(slidesData)) }
      </div>
    );
  }
}

function mapStateToProps({ slideshows }) {
  return {
    slideshows
  };
}

export default connect(mapStateToProps, { fetchSlidesData })(Slideshow);
