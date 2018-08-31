import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Link from 'next/link';
import Card from './card';
import { fetchRecommendStoreList } from '../actions';

const renderCards = (recommendStoresData) => {
  return _.map(recommendStoresData, (store) => {
    return (
      <Card key={store.id} store={store} ref={this.card} />
    );
  });
};

class Notfound extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRecommendStoreList());
  }


  render() {
    const { tags } = this.props;
    const { recommendStoresData } = this.props.filteredStores;

    return (
      <div>
        <h1 className="panel__main-heading">
          找不到！
        </h1>
        <Link href="/">
          <a title="回「吃什麼」首頁">回首頁</a>
        </Link>
        或看熱門關鍵字
        <Link href={`/tags/${tags[0]}`}>
          <a title={tags[0]}>{tags[0]}</a>
        </Link>
        、
        <Link href={`/tags/${tags[1]}`}>
          <a title={tags[1]}>{tags[1]}</a>
        </Link>
        、
        <Link href={`/tags/${tags[2]}`}>
          <a title={tags[2]}>{tags[2]}</a>
        </Link>
        <hr />
        <div className="mt-2x">
          <h1 className="panel__main-heading">
          猜你想吃
          </h1>
          <div className="card-list">
            { renderCards(recommendStoresData) }
          </div>
        </div>
      </div>
    );
  }
}


Notfound.propTypes = {
  tags: PropTypes.array.isRequired,
  recommendStoresData: PropTypes.array,
};

Notfound.defaultProps = {
  recommendStoresData: null,
};

export default connect(state => state)(Notfound);
