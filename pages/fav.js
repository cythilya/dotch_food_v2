import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Page from '../components/page';
import Card from '../components/card';
import FavList from '../components/favlist';
import { fetchHotStoreList, addFavList } from '../actions/index';

class Fav extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchHotStoreList());
  }

  renderCards(stores) {
    const { dispatch, user: { userInfo }} = this.props;

    return _.map(stores, (store) => (
      <Card
        addFavList={(args) => {dispatch(addFavList(args))}}
        key={store.id}
        store={store}
        userID={userInfo.id}
      />
    ));
  };

  render() {
    const { filteredStores } = this.props;
    const { hotStoresData } = filteredStores;

    return (
      <Page title="首頁" id="index">
        <div className="panel">
          <h1 className="panel__main-heading">我的最愛</h1>
            <FavList />
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

Fav.propTypes = {
  favList: PropTypes.object,
  hotStoresData: PropTypes.array,
};

Fav.defaultProps = {
  favList: null,
  hotStoresData: [],
};

export default connect(state => state)(Fav);
