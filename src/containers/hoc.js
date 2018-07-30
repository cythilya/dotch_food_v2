import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';

const HOC = (WrappedComponent, state, fetchDataFn) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...state,
      pageNum: 1,
    };
    this.fetchDataHandler = this.fetchDataHandler.bind(this);
  }

  fetchDataHandler() {
    const { pageNum, data } = this.state;
    const fetchedData = fetchDataFn(pageNum);

    this.setState({
      pageNum: pageNum + 1,
      data: data.concat(fetchedData),
    });
  }

  render() {
    return (
      <div>
        <WrappedComponent {...this.props} {...this.state} />
        <Divider hidden />
        <div className="align-center">
          <Button fluid onClick={this.fetchDataHandler}>
            看更多
          </Button>
        </div>
      </div>
    );
  }
};

export default HOC;
