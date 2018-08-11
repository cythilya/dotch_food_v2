import React from 'react';

const GATracking = (Component, state, title, label, callback) => class extends Component {
  constructor(props) {
    super(props);
    this.state = state;
    this.handleEventTracking = this.handleEventTracking.bind(this);
  }

  handleEventTracking() {
    callback();
    // console.log(`追蹤熱門連結：${event.target.href}`);

    // ga('send', 'event', {
    //   eventCategory: this.props.label,
    //   eventAction: 'click',
    //   eventLabel: event.target.href,
    //   hitCallback: function() {}
    // });
  }

  render() {
    return (
      <Component {...this.props} {...this.state} onClick={this.handleEventTracking}>
        {title}
      </Component>
    );
  }
};

export default GATracking;
