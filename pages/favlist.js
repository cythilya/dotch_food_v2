import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Page from '../components/page';
import Card from '../components/card';
import favListJSON from '../data/favlist.json';
import {
  addFavList,
  fetchFavList,
  fetchHotStoreList,
} from '../actions/index';

class FavList extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchFavList());
    dispatch(fetchHotStoreList());
  }

  renderCards(stores) {
    const { dispatch } = this.props;

    return _.map(stores, (store) => (
      <Card
        addFavList={() => {dispatch(addFavList())}}
        key={store.id}
        store={store}
      />
    ));
  };

  render() {
    const { favList, filteredStores } = this.props;
    const { hotStoresData } = filteredStores;

    return (
      <Page title="首頁" id="index">
        <div className="panel">
          <h1 className="panel__main-heading">我的最愛</h1>
            <div className="card-list">
              {this.renderCards(favList)}
            </div>
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
          <div className="card-list">
            {this.renderCards(hotStoresData)}
          </div>
        </div>
      </Page>
    )
  }
}

FavList.propTypes = {
  favList: PropTypes.array,
  hotStoresData: PropTypes.array,
};

FavList.defaultProps = {
  favList: [],
  hotStoresData: [],
};

export default connect(state => state)(FavList);
