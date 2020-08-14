import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import StoresReducer from './reducer_stores';
import FilteredStoresReducer from './reducer_filtered_stores';
import SlidesReducer from './reducer_slideshows';
import StoreReducer from './reducer_store';
import StoreComments from './reducer_store_comments';
import FavList from './favlist';
import User from './user';

const rootReducer = combineReducers({
  stores: StoresReducer,
  filteredStores: FilteredStoresReducer,
  slideshows: SlidesReducer,
  form: FormReducer,
  store: StoreReducer,
  storeComments: StoreComments,
  favList: FavList,
  user: User,
});

export default rootReducer;
