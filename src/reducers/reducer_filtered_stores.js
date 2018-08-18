import _ from 'lodash';
import {
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_HOT_STORE_LIST,
} from '../constants';

export default function (state = {}, action) {
  let storesData = {};
  let hotStoresData = {};
  let recommendStoresData = {};
  let nearbyStoresData = {};

  switch (action.type) {
    case FETCH_NEARBY_STORE_LIST:
      action.payload.forEach((doc) => {
        nearbyStoresData = [...nearbyStoresData, doc.data()];
      });

      nearbyStoresData.forEach((item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, nearbyStoresData };
    case FETCH_RECOMMEND_STORE_LIST:
      action.payload.forEach((doc) => {
        recommendStoresData = [...recommendStoresData, doc.data()];
      });

      recommendStoresData.forEach((item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, recommendStoresData };
    case FETCH_HOT_STORE_LIST:
      action.payload.forEach((doc) => {
        hotStoresData = [...hotStoresData, doc.data()];
      });

      hotStoresData.forEach((item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return { ...state, hotStoresData };
    default:
      return state;
  }
}
