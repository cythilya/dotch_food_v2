import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Item,
  Label,
  Divider,
} from 'semantic-ui-react';
import HOC from '../containers/hoc';
import Comments from './comments';

const StoreItem = ({ store }) => {
  const commentsData = {
    storeId: store.id,
    data: [
      {
        id: '123456789',
        name: '吳艾月',
        image: 'https://dummyimage.com/35x35/aaaaaa/fff',
        time: '今天下午 5:42',
        text: '超好吃！',
      },
      {
        id: '234567890',
        name: '方惠春',
        image: 'https://dummyimage.com/35x35/7600bb/fff',
        time: '昨天下午 12:30',
        text: '很推薦！',
      },
      {
        id: '345678901',
        name: '林璇旭',
        image: 'https://dummyimage.com/35x35/000/fff',
        time: '五天以前',
        text: '最佳選擇！',
      },
    ],
  };

  const fetchComments = () => {
    // fetch more comments...
    return _.cloneDeep(commentsData.data);
  };

  const CommentList = HOC(Comments, commentsData, fetchComments);

  return (
    <Item key={store.id}>
      <Item.Image src={store.image[0].url} />
      <Item.Content>
        <Item.Header>
          <Link to={`/store/${store.id}`}>
            {store.name}
          </Link>
        </Item.Header>
        <Item.Meta>
          <span className="cinema">
            {store.description}
          </span>
        </Item.Meta>
        <Item.Description>
          <ul>
            <li>
              地址：
              {store.location.address}
            </li>
            <li>
              電話：
              {store.phone}
            </li>
            <li>
              營業時間：
              {store.openingHour.start}
              ~
              {store.openingHour.end}
            </li>
            <li>
              價位：
              {store.price.lowest}
              ~
              {store.price.highest}
            </li>
            <li>
              網站介紹：
              <Link
                to={store.sns.website}
                title={store.name}
                target="_blank"
              >
                {store.name}
              </Link>
            </li>
          </ul>
        </Item.Description>
        <Item.Extra>
          {
            store.tags.map((item) => {
              return (
                <Label key={item}>
                  <Link to={`/tags/${item}`}>
                    {item}
                  </Link>
                </Label>
              );
            })
          }
        </Item.Extra>
        <Divider hidden />
        <CommentList />
      </Item.Content>
    </Item>
  );
};

StoreItem.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreItem;
