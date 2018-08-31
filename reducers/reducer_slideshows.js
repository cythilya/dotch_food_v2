import _ from 'lodash';
import { FETCH_SLIDES_DATA } from '../constants';

export default function (state = {}, action) {
  let slidesData = [];

  switch (action.type) {
    case FETCH_SLIDES_DATA:
      _.forEach(action.payload.docs, (doc) => {
        slidesData.push(doc.data());
      });

      return { ...state, slidesData };
    default:
      return state;
  }
}
