import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Header as HeaderSemanticUI,
  Item,
  Grid,
  Icon,
  Segment,
  Message,
  Card,
  Image,
  Label,
  Loader,
  Divider,
} from 'semantic-ui-react';
import Newsticker from 'react-newsticker';
import Header from '../components/header';
import StoreItem from '../components/store_item';
import TagList from '../components/tag_list';
import Footer from '../components/footer';
import { fetchStoreList, fetchStoreListByTag } from '../actions';
import HOC from './hoc';
import Feeds from '../components/feeds';
import Slideshow from './slideshow';

const feedsData = {
  data: [
    {
      id: '123456789',
      name: '陳秋心',
      image: 'https://dummyimage.com/35x35/F25E7A/fff',
      time: '今天下午 3:30',
      store: {
        id: 2,
        name: 'Grab a Bite 幸福提食',
      },
    },
    {
      id: '234567890',
      name: '黃怡如',
      image: 'https://dummyimage.com/35x35/f2dc6d/fff',
      time: '昨日下午 7:02',
      store: {
        id: 1,
        name: 'YAYOI Taiwan (南京松江店)',
      },
    },
    {
      id: '345678901',
      name: '王雅菁',
      image: 'https://dummyimage.com/35x35/41d1f2/fff',
      time: '三天以前',
      store: {
        id: 1,
        name: 'YAYOI Taiwan (南京松江店)',
      },
    },
  ],
};

const fetchFeeds = (pageNum = 0) => {
  // fetch more feeds...
  return _.cloneDeep(feedsData.data);
};

const FeedList = HOC(Feeds, feedsData, fetchFeeds);

class StoreList extends Component {
  constructor(props) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.renderNotFound = this.renderNotFound.bind(this);
  }

  componentDidMount() {
    this.fetchStoresData(this.props.match.params.keyword);
  }

  componentDidUpdate(prevProps, prevState) {
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

  renderNotFound(isEmpty, defaultHotTags) {
    const remainTags = defaultHotTags.slice(0, 3);

    return (
      <div className={isEmpty ? 'show' : 'hide'}>
        <Message icon>
          <Icon name="info circle" />
          <Message.Content>
            <Message.Header>
              找不到
            </Message.Header>
            <Link to="/" title="回「吃什麼」首頁">
              回首頁
            </Link>
            或看熱門關鍵字
            <Link to={`/tags/${remainTags[0]}`}>
              {remainTags[0]}
            </Link>
            、
            <Link to={`/tags/${remainTags[1]}`}>
              {remainTags[1]}
            </Link>
            、
            <Link to={`/tags/${remainTags[2]}`}>
              {remainTags[2]}
            </Link>
          </Message.Content>
        </Message>
        <div>
          <HeaderSemanticUI as="h2">
            猜你想吃
          </HeaderSemanticUI>
          <Card.Group itemsPerRow={3}>
            <Card>
              <Image src="http://cythilya.github.io/assets/dotch-food-v2/oka-taro-hours/oka-taro-hours.jpg" />
              <Card.Content>
                <Card.Header>
                  岡太郎家日式料理
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    營業時間：11:30-14:00、17:00-21:00
                  </span>
                </Card.Meta>
                <Card.Description>
                  <p>
                    台北市和平東路二段175巷12號
                  </p>
                  <p>
                    巷弄中，簡單溫暖的小店，賣推薦的食材，還有簡單的料理。
                  </p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label>
                  <Link to={`/tags/${remainTags[0]}`}>
                    {remainTags[0]}
                  </Link>
                </Label>
              </Card.Content>
            </Card>
            <Card>
              <Image src="http://cythilya.github.io/assets/dotch-food-v2/grab-a-bite/grab-a-bite-1.jpg" />
              <Card.Content>
                <Card.Header>
                  Grab a Bite 幸福提食
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    營業時間：8 AM - 6 PM
                  </span>
                </Card.Meta>
                <Card.Description>
                  <p>
                    台北市通化街140-1號
                  </p>
                  <p>
                    小小不到九坪的三角窗，我們採半開放式空間，座位不多不少就十個，但卻可以為您帶來意想不到的美好滋味。 我們以天然的食材，給予客人最健康的享受，來迎接每一個早晨。
                  </p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label>
                  <Link to={`/tags/${remainTags[1]}`}>
                    {remainTags[1]}
                  </Link>
                </Label>
              </Card.Content>
            </Card>
            <Card>
              <Image
                src="https://bit.ly/2K9dZyC"
              />
              <Card.Content>
                <Card.Header>
                  YAYOI Taiwan (南京松江店)
                </Card.Header>
                <Card.Meta>
                  <span className="date">
                    營業時間：11 AM - 10 PM
                  </span>
                </Card.Meta>
                <Card.Description>
                  <p>
                    台北市中山區南京東路二段97號1樓
                  </p>
                  <p>
                    「YAYOI」是一家日式定食餐廳。提供營養均衡的「定食」，其中包括日本人的主食\u2015剛出鍋的金芽米飯、味噌湯、主菜和副菜等。「YAYOI」將傳承日本美食，並將其推向世界。
                  </p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label>
                  <Link to={`/tags/${remainTags[0]}`}>
                    {remainTags[0]}
                  </Link>
                </Label>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    );
  }

  renderLoading(isLoading) {
    return (
      <div className={isLoading ? 'show' : 'hide'}>
        <Loader active inline="centered" />
      </div>
    );
  }

  render() {
    const { stores, match } = this.props;
    const { keyword } = match.params;
    const isAutoPlay = process.env.NODE_ENV === 'production';
    const defaultHotTags = ['日式料理', '早午餐', '沙拉', '燒烤', '漢堡', '輕食', '牛排', '生魚片', '關東煮', '平價'];
    const news = [
      '來自名古屋的早餐，Komeda coffee 鬆軟奶油吐司，南京松江站',
      '與小熊維尼的午茶約會！新宿「蜂蜜咖啡」限定登場',
      '七夕就是要浪漫一下！全台精選 10 家特色浪漫景觀餐廳',
    ];

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
                { this.renderNotFound(_.isArray(stores) && _.isEmpty(stores), defaultHotTags) }
                { this.renderLoading(_.isObject(stores) && !_.isArray(stores) && _.isEmpty(stores)) }
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
