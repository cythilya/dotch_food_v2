import { FETCH_FAV_LIST } from '../constants';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_FAV_LIST:
      return action.payload;
    default:
      return state;
  }
}
