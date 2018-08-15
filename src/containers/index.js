import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import Header from '../components/header';
import Slideshow from './slideshow';
import Newsticker from 'react-newsticker';
import Card from '../components/card';
import TagList from '../components/tag_list';
import Footer from '../components/footer';
import data from '../data/data';
import { fetchStoreList, fetchStoreListByTag } from '../actions';

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
    const { match: { params: { keyword } } } = this.props;
    this.fetchStoresData(keyword);
  }

  componentDidUpdate(prevProps) {
    const { keyword, match } = this.props;

    if (keyword !== prevProps.keyword) {
      this.fetchStoresData(match.params.keyword);
    }
  }

  fetchStoresData(keyword) {
    const { fetchStoreListByTag, fetchStoreList } = this.props;
    keyword ? fetchStoreListByTag(keyword) : fetchStoreList();
  }

  renderCards() {
    const { stores } = this.props;

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
    const { stores } = this.props;
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
              </h1>
              <Link to="/nearby" className="panel__view-more">
                看更多
              </Link>
              <div className="card-list">
                { this.renderCards() }
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
                { this.renderCards() }
              </div>
            </div>
            <div className="panel">
              <h1 className="panel__main-heading">
                熱門推薦
              </h1>
              <Link to="/tags/熱門" className="panel__view-more">
                看更多
              </Link>
              <div className="card-list">
                { this.renderCards() }
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
  keyword: PropTypes.string,
  match: PropTypes.object.isRequired,
  stores: PropTypes.object,
};

Index.defaultProps = {
  keyword: null,
  stores: null,
};

function mapStateToProps({ stores }, ownProps) {
  return {
    keyword: ownProps.match.params.keyword,
    stores,
  };
}

export default connect(mapStateToProps, { fetchStoreList, fetchStoreListByTag })(Index);
