import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import Icon from '../components/icon';
import { fetchRecommendStoreList } from '../actions';

class Notfound extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    fetchRecommendStoreList();
  }

  renderCards() {
    const { recommendStoresData: stores } = this.props;

    return _.map(stores, (store) => {
      return (
        <Card key={store.id} store={store} />
      );
    });
  }

  render() {
    const { recommendStoresData, tags } = this.props;

    return (
      <div>
        <h1 className="panel__main-heading">
          找不到！
        </h1>
        <Link to="/" title="回「吃什麼」首頁">
          回首頁
        </Link>
        或看熱門關鍵字
        <Link to={`/tags/${tags[0]}`}>
          {tags[0]}
        </Link>
        、
        <Link to={`/tags/${tags[1]}`}>
          {tags[1]}
        </Link>
        、
        <Link to={`/tags/${tags[2]}`}>
          {tags[2]}
        </Link>
        <hr />
        <div className="mt-2x">
          <h1 className="panel__main-heading">
          猜你想吃
          </h1>
          <div className="card-list">
            { this.renderCards(recommendStoresData) }
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

function mapStateToProps({ filteredStores }) {
  const { recommendStoresData } = filteredStores;

  return {
    recommendStoresData,
  };
}

export default connect(mapStateToProps, {
  fetchRecommendStoreList,
})(Notfound);
