import _ from 'lodash';
import {
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_HOT_STORE_LIST,
} from '../constants';

export default function (state = {}, action) {
  let hotStoresData = [];
  let recommendStoresData = [];
  let nearbyStoresData = [];

  switch (action.type) {
    case FETCH_NEARBY_STORE_LIST:
      _.forEach(action.payload.docs, (doc) => {
        nearbyStoresData.push(doc.data());
      });

      _.forEach(nearbyStoresData, (item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, nearbyStoresData };
    case FETCH_RECOMMEND_STORE_LIST:
      _.forEach(action.payload.docs, (doc) => {
        recommendStoresData.push(doc.data());
      });

      _.forEach(recommendStoresData, (item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, recommendStoresData };
    case FETCH_HOT_STORE_LIST:
      _.forEach(action.payload.docs, (doc) => {
        hotStoresData.push(doc.data());
      });

      _.forEach(hotStoresData, (item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, hotStoresData };
    default:
      return state;
  }
}
