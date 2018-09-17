import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Page from '../components/page';
import StoreInfo from '../components/store_info';
import StoreComments from '../components/store_comments';
import Notfound from '../components/not_found';

import {
  fetchStoreInfo,
  fetchStoreComments,
} from '../actions/index';
import data from '../data/data';

const {
  hotTags,
} = data;

const renderNotFound = () => {
  return (<Notfound tags={hotTags.slice(0, 3)} />);
};

const renderLoading = () => {
  return (
    <div className="icon-loading store-item__loading" />
  );
};

class Store extends Component {
  componentDidMount() {
    const { dispatch, router } = this.props;
    const { id } = router.query;
    dispatch(fetchStoreInfo(id));
    dispatch(fetchStoreComments(id));
  }

  componentDidUpdate(prevProps) {
    const { dispatch } = this.props;
    const id = this.props.router.query.id;

    if (id !== prevProps.router.query.id) {
      dispatch(fetchStoreInfo(id));
      dispatch(fetchStoreComments(id));
    }
  }

  render() {
    const { store, storeComments } = this.props;
    const id = this.props.router.query.id;
    const isNotFound = _.isEmpty(store);
    const isLoading = _.isObject(store) && _.isEmpty(store);

    return (
      <Page title="商店單頁" id="store">
        <div className="panel">
          { !isNotFound
            && (
              <div>
                <h1 className="panel__main-heading mb-2x">
                  <Link href={`/store/?id=${store.id}`}>
                    <a title={store.name}>
                      {store.name}
                    </a>
                  </Link>
                </h1>
                <StoreInfo store={store} />
                { (storeComments.length > 0) && <StoreComments comments={storeComments} />}
              </div>
            )
          }
          { isNotFound && renderNotFound() }
          { isLoading && renderLoading() }
        </div>
      </Page>
    );
  }
}

Store.propTypes = {
  store: PropTypes.object.isRequired,
  storeComments: PropTypes.array,
};

Store.defaultProps = {
  storeComments: [],
};

export default withRouter(connect(state => state)(Store));
