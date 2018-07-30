import { combineReducers } from 'redux';
import StoresReducer from './reducer_stores';
import SlidesReducer from './reducer_slideshows';

const rootReducer = combineReducers({
  stores: StoresReducer,
  slideshows: SlidesReducer,
});

export default rootReducer;
