import { FETCH_SLIDES_DATA } from '../constants';

export default function(state = {}, action) {
  let slidesData = [];

  switch (action.type) {
  case FETCH_SLIDES_DATA:

    action.payload.forEach((doc) => {
      slidesData = [...slidesData, doc.data()];
    });
    return slidesData;
  default:
    return state;
  }
}