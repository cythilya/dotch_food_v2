import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import _ from 'lodash';
import Newsticker from 'react-newsticker';
import Header from '../components/header';
import Slideshow from './slideshow';
import Card from '../components/card';
import TagList from '../components/tag_list';
import Footer from '../components/footer';
import Icon from '../components/icon';
import data from '../data/data';

import {
  fetchNearbyStoreList,
  fetchRecommendStoreList,
  fetchHotStoreList,
} from '../actions';

const {
  hotTags: defaultHotTags,
  news,
} = data;

class Index extends Component {
  constructor(props) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  componentDidMount() {
    this.fetchStoresData();
  }

  fetchStoresData() {
    const {
      fetchNearbyStoreList,
      fetchRecommendStoreList,
      fetchHotStoreList,
    } = this.props;

    fetchNearbyStoreList();
    fetchRecommendStoreList();
    fetchHotStoreList();
  }

  renderCards(stores) {
    return _.map(stores, (store) => {
      return (
        <Card key={store.id} store={store} />
      );
    });
  }

  renderLoading() {
    return (<Loader active inline="centered" />);
  }

  render() {
    const { nearbyStoresData, recommendStoresData, hotStoresData } = this.props;
    const isAutoPlay = process.env.NODE_ENV === 'production';

    return (
      <div>
        <Header />
        <Slideshow interval={1000} pause={4000} auto={isAutoPlay} />
        <div className="newsticker">
          <Newsticker news={news} />
        </div>
        <div className="app-container app-container--reverse">
          <div className="app-main-content">
            <div className="panel">
              <h1 className="panel__main-heading">
                離我最近
                <Icon
                  name="pin-map"
                  fill="#767676"
                  className="panel__heading-deco"
                  size="24"
                />
              </h1>
              <Link to="/nearby" className="panel__view-more">
                看更多
              </Link>
              <div className="card-list">
                { this.renderCards(nearbyStoresData) }
              </div>
            </div>
            <div className="panel">
              <h1 className="panel__main-heading">
                猜你想吃
              </h1>
              <Link to="/recommend" className="panel__view-more">
                看更多
              </Link>
              <div className="card-list">
                { this.renderCards(recommendStoresData) }
              </div>
            </div>
            <div className="panel">
              <h1 className="panel__main-heading">
                熱門推薦
                <Icon
                  name="star"
                  fill="#f2dc6d"
                  className="panel__heading-deco"
                  size="24"
                />
              </h1>
              <Link to="/tags/熱門" className="panel__view-more">
                看更多
              </Link>
              <div className="card-list">
                { this.renderCards(hotStoresData) }
              </div>
            </div>
          </div>
          <div className="app-menu">
            <div className="panel">
              <h1 className="panel__main-heading">
                熱門主題
              </h1>
              <TagList tags={defaultHotTags} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  nearbyStoresData: PropTypes.array,
  recommendStoresData: PropTypes.array,
  hotStoresData: PropTypes.array,
};

Index.defaultProps = {
  nearbyStoresData: null,
  recommendStoresData: null,
  hotStoresData: null,
};

function mapStateToProps({ filteredStores }) {
  const { nearbyStoresData, recommendStoresData, hotStoresData } = filteredStores;

  return {
    nearbyStoresData,
    recommendStoresData,
    hotStoresData,
  };
}

export default connect(mapStateToProps, {
  fetchNearbyStoreList,
  fetchRecommendStoreList,
  fetchHotStoreList,
})(Index);
