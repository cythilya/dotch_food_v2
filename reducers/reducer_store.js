import _ from 'lodash';
import { FETCH_STORE_INFO } from '../constants';

export default function (state = {}, action) {
  let storeInfo = [];

  switch (action.type) {
    case FETCH_STORE_INFO:
      action.payload.forEach((doc) => {
        storeInfo = [...storeInfo, doc.data()];
      });

      storeInfo.forEach((item) => {
        if (typeof item.tags === 'object') {
          item.tags = _.keys(item.tags);
        }
      });

      return storeInfo[0];
    default:
      return state;
  }
}
