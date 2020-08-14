import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withCookies } from 'react-cookie';
import {
  addFavList,
  fetchFavList,
  restoreUserInfo,
} from '../actions/index';
import Card from './card';
import { DOTCH_FOOD_COOKIE_KEY } from '../constants';

class FavList extends Component {
  constructor(props) {
    super(props);

    this.renderCardList = this.renderCardList.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.renderNoDataHint = this.renderNoDataHint.bind(this);
  }

  componentDidMount() {
    const { dispatch, cookies: { cookies } } = this.props;

    // restore user info from cookie when reload page
    if (cookies && cookies[DOTCH_FOOD_COOKIE_KEY]) {
      const userInfo = JSON.parse(cookies[DOTCH_FOOD_COOKIE_KEY]);
      userInfo && userInfo.id && dispatch(fetchFavList(userInfo.id));
      dispatch(restoreUserInfo(userInfo));
    }
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

  renderCardList() {
    const { favList } = this.props;


    return (
      <div className="card-list">
        {this.renderCards(favList)}
      </div>
    );
  }

  renderNoDataHint() {
    return (<div>這裡是空的 XDDD</div>);
  }

  render() {
    const { favList, user: { isLogin } } = this.props;
    const isEmptyFavList = !_.size(favList);

    return (
      <div>
          {isEmptyFavList && this.renderNoDataHint()}
          {!isEmptyFavList && isLogin && this.renderCardList(favList)}
      </div>
    )
  }
}

FavList.propTypes = {
  favList: PropTypes.object,
};

FavList.defaultProps = {
  favList: null,
};

export default withCookies(connect(state => state)(FavList));
