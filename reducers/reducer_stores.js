import _ from 'lodash';
import { FETCH_STORE_LIST, FETCH_STORE_LIST_BY_TAG } from '../constants';

export default function (state = {}, action) {
  let storesData = [];

  switch (action.type) {
    case FETCH_STORE_LIST:
    case FETCH_STORE_LIST_BY_TAG:
      action.payload.forEach((doc) => {
        storesData = [...storesData, doc.data()];
      });

      storesData.forEach((item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return storesData;
    default:
      return state;
  }
}
