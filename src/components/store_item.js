import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Item,
  Label,
  Divider,
} from 'semantic-ui-react';
// import StoryEnhance from '../decorators/story_enhance';
// import Comments from './comments';
// import data from '../data/data';

// const { feeds: { data: feedsData } } = data;

const StoreItem = ({ store }) => {
  // const commentsData = {
  //   storeId: store.id,
  //   data: feedsData,
  // };

  // const fetchComments = () => {
  //   return _.cloneDeep(commentsData.data);  // fetch more comments...
  // };

  // const CommentList = StoryEnhance(Comments, commentsData, fetchComments, false);

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
        {/* <CommentList /> */}
      </Item.Content>
    </Item>
  );
};

StoreItem.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreItem;
