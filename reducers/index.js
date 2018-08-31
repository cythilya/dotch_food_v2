import { combineReducers } from 'redux';
import StoresReducer from './reducer_stores';
import FilteredStoresReducer from './reducer_filtered_stores';
import SlidesReducer from './reducer_slideshows';

const rootReducer = combineReducers({
  stores: StoresReducer,
  filteredStores: FilteredStoresReducer,
  slideshows: SlidesReducer,
});

export default rootReducer;
