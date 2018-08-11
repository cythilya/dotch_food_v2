import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Item,
  Grid,
  Segment,
  Loader,
  Divider,
} from 'semantic-ui-react';
import Header from '../components/header';
import Slideshow from './slideshow';
import Newsticker from 'react-newsticker';
import Notfound from '../components/not_found';
import StoreItem from '../components/store_item';
import TagList from '../components/tag_list';
import Feeds from '../components/feeds';
import Footer from '../components/footer';
import StoryEnhance from '../decorators/story_enhance';
import data from '../data/data';
import { fetchStoreList, fetchStoreListByTag } from '../actions';

const {
  feeds: feedsData,
  hotTags: defaultHotTags,
  news,
} = data;

const fetchFeeds = (pageNum = 0) => {
  return _.cloneDeep(feedsData.data); // fetch more feeds...
};

const FeedList = StoryEnhance(Feeds, feedsData, fetchFeeds, false);

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
        <Container>
          <Header />
        </Container>
        { !keyword && <Slideshow interval={1000} pause={4000} auto={isAutoPlay} /> }
        <Container>
          <Newsticker news={news} />
          <Grid>
            <Grid.Column width={12}>
              <Item.Group divided>
                { this.renderStores() }
                { isNotFound && this.renderNotFound(defaultHotTags) }
                { isLoading && this.renderLoading() }
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                <TagList tags={defaultHotTags} />
              </Segment>
              <Segment>
                <FeedList />
              </Segment>
            </Grid.Column>
          </Grid>
          <Divider />
          <Footer />
        </Container>
      </div>
    );
  }
}

StoreList.propTypes = {
  keyword: PropTypes.string,
  match: PropTypes.object.isRequired,
};

StoreList.defaultProps = {
  keyword: null,
};

function mapStateToProps({ stores }, ownProps) {
  return {
    keyword: ownProps.match.params.keyword,
    stores,
  };
}

export default connect(mapStateToProps, { fetchStoreList, fetchStoreListByTag })(StoreList);
