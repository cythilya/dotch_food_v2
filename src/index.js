import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import StoreList from './containers/store_list';
import '../style/index.css'; // global styles

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/store/:id" component={StoreList} />
        <Route path="/tags/:keyword" component={StoreList} />
        <Route path="/search/:keyword" component={StoreList} />
        <Route path="/stores" component={StoreList} />
        <Route path="/" component={StoreList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('.app'),
);
