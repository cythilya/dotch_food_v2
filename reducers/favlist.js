import { FETCH_FAV_LIST } from '../constants';

export default function (state = {}, action) {
  let favData = [];

  switch (action.type) {
    case FETCH_FAV_LIST:
      _.forEach(action.payload.docs, (doc) => {
        favData.push(doc.data());
      });

      return { ...favData[0].list };
    default:
      return state;
  }
}
