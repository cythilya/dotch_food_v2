import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import Newsticker from 'react-newsticker';
import Header from '../components/header';
import Slideshow from './slideshow';
import Notfound from './not_found';
import StoreItem from '../components/store_item';
import TagList from '../components/tag_list';
import Footer from '../components/footer';
import data from '../data/data';
import { fetchStoreList, fetchStoreListByTag } from '../actions';

const {
  hotTags: defaultHotTags,
  news,
} = data;

class StoreList extends Component {
  constructor(props) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.renderNotFound = this.renderNotFound.bind(this);
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

  renderStores() {
    const { stores } = this.props;

    return _.map(stores, (store) => {
      return (
        <StoreItem key={store.id} store={store} />
      );
    });
  }

  renderNotFound(defaultHotTags) {
    return (<Notfound tags={defaultHotTags.slice(0, 3)} />);
  }

  renderLoading() {
    return (<Loader active inline="centered" />);
  }

  render() {
    const { stores, match } = this.props;
    const { keyword } = match.params;
    const isAutoPlay = process.env.NODE_ENV === 'production';
    const isNotFound = _.isArray(stores) && _.isEmpty(stores);
    const isLoading = _.isObject(stores) && !_.isArray(stores) && _.isEmpty(stores);

    return (
      <div>
        <Header />
        { !keyword && <Slideshow interval={1000} pause={4000} auto={isAutoPlay} /> }
        {
          !isNotFound
          && (
          <div className="newsticker">
            <Newsticker news={news} />
          </div>
          )
        }
        <div className="app-container">
          <div className="app-main-content">
            <div className="panel">
              { !isNotFound
                && (
                  <h1 className="panel__main-heading">
                    {
                      keyword
                    }
                  </h1>
                )
              }
              { this.renderStores() }
              { isNotFound && this.renderNotFound(defaultHotTags) }
              { isLoading && this.renderLoading() }
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

StoreList.propTypes = {
  keyword: PropTypes.string,
  match: PropTypes.object.isRequired,
  stores: PropTypes.object,
};

StoreList.defaultProps = {
  keyword: null,
  stores: null,
};

function mapStateToProps({ stores }, ownProps) {
  return {
    keyword: ownProps.match.params.keyword,
    stores,
  };
}

export default connect(mapStateToProps, { fetchStoreList, fetchStoreListByTag })(StoreList);
