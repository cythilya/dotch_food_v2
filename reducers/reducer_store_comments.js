import _ from 'lodash';
import { FETCH_STORE_COMMENTS } from '../constants';

export default function (state = {}, action) {
  let commentsData = [];

  switch (action.type) {
    case FETCH_STORE_COMMENTS:
      action.payload.forEach((doc) => {
        commentsData = [...commentsData, doc.data()];
      });

      return commentsData;
    default:
      return state;
  }
}
