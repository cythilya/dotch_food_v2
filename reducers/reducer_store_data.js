import _ from 'lodash';
import { SAVE_STORE_DATA } from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_STORE_DATA:
      const data = JSON.stringify(action.payload);
      console.log(`reducer: ${data}`);
      return {};
    default:
      return state;
  }
}
