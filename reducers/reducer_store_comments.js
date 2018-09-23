import { FETCH_STORE_COMMENTS } from '../constants';

export default function (state = {}, action) {
  let commentList = [];
  let id = '';

  switch (action.type) {
    case FETCH_STORE_COMMENTS:
      action.payload.forEach((doc) => {
        id = doc.id;
        commentList = [...commentList, doc.data()];
      });

      return {
        id,
        commentList,
      };
    default:
      return state;
  }
}
