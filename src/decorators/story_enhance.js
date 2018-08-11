import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const HOC = (WrappedComponent, state, fetchDataFn, isMore) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...state,
      pageNum: 1,
    };
    this.fetchDataHandler = this.fetchDataHandler.bind(this);
    this.renderMoreBlock = this.renderMoreBlock.bind(this);
  }

  fetchDataHandler() {
    const { pageNum, data } = this.state;
    const fetchedData = fetchDataFn(pageNum);

    this.setState({
      pageNum: pageNum + 1,
      data: data.concat(fetchedData),
    });
  }

  renderMoreBlock() {
    return (
      <div>
        <Divider hidden />
        <div className="align-center">
          <Button fluid onClick={this.fetchDataHandler}>
            看更多
          </Button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <WrappedComponent {...this.props} {...this.state} />
        { isMore && this.renderMoreBlock() }
      </div>
    );
  }
};

HOC.propTypes = {
  isMore: PropTypes.bool,
};

HOC.defaultProps = {
  isMore: false,
};

export default HOC;
