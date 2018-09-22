import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NoSSR from 'react-no-ssr';
import Page from '../components/page';
import Card from '../components/card';

import {
  fetchNearbyStoreList,
  fetchRecommendStoreList,
  fetchHotStoreList,
} from '../actions/index';

class Index extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchNearbyStoreList());
    dispatch(fetchRecommendStoreList());
    dispatch(fetchHotStoreList());
  }

  renderCards(stores) {
    return _.map(stores, (store) => {
      return <Card key={store.id} store={store} />;
    });
  };

  render() {
    const { nearbyStoresData, recommendStoresData, hotStoresData } = this.props.filteredStores;

    return (
      <Page title="首頁" id="index">
        <div className="panel">
          <h1 className="panel__main-heading">
            離我最近
            <span className="panel__heading-deco icon-pin-map" />
          </h1>
          <Link href="/nearby">
            <a
              className="panel__view-more"
              title="看更多-離我最近"
            >
              看更多
            </a>
          </Link>
          <NoSSR>
            <div className="card-list">
              { this.renderCards(nearbyStoresData) }
            </div>
          </NoSSR>
        </div>
        <div className="panel">
          <h1 className="panel__main-heading">
            猜你想吃
          </h1>
          <Link href="/nearby">
            <a
              className="panel__view-more"
              title="看更多-猜你想吃"
            >
              看更多
            </a>
          </Link>
          <NoSSR>
            <div className="card-list">
              { this.renderCards(recommendStoresData) }
            </div>
          </NoSSR>
        </div>
        <div className="panel">
          <h1 className="panel__main-heading">
            熱門推薦
            <span className="panel__heading-deco icon-star" />
          </h1>
          <Link href="/nearby">
            <a
              className="panel__view-more"
              title="看更多-熱門推薦"
            >
              看更多
            </a>
          </Link>
          <NoSSR>
            <div className="card-list">
              { this.renderCards(hotStoresData) }
            </div>
          </NoSSR>
        </div>
      </Page>
    );
  }
}

Index.propTypes = {
  nearbyStoresData: PropTypes.array,
  recommendStoresData: PropTypes.array,
  hotStoresData: PropTypes.array,
};

Index.defaultProps = {
  nearbyStoresData: [],
  recommendStoresData: [],
  hotStoresData: [],
};

export default connect(state => state)(Index);
