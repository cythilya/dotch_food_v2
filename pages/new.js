import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageFull from '../components/page_full';
import StoreDataForm from '../components/form';

import {
  saveStoreData,
} from '../actions/index';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.subimt = this.subimt.bind(this);
  }

  subimt(values) {
    const { dispatch } = this.props;
    dispatch(saveStoreData(values));
  }

  render() {
    return (
      <PageFull title="新增店家" id="new">
        <div className="panel">
          <StoreDataForm onSubmit={this.subimt} />
        </div>
      </PageFull>
    );
  }
}


New.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(New);
