import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageFull from '../components/page_full';
import StoreDataForm from '../components/store_form';
import '../style/components/alert.css';

import {
  saveStoreData,
} from '../actions/index';

class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: 1, // 0: error, 1: initial, 2: success
    };
    this.subimt = this.subimt.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.resetFormStatus = this.resetFormStatus.bind(this);
  }

  subimt(values) {
    const { dispatch } = this.props;

    dispatch(saveStoreData(values)).then(() => {
      this.setState({ isFormValid: 2 });
    });
  }

  handleSubmitFail() {
    this.setState({ isFormValid: 0 });
  }

  resetFormStatus(status) {
    this.setState({ isFormValid: status });
  }

  render() {
    const isFormValid = this.state.isFormValid;

    return (
      <PageFull title="新增店家" id="new">
        <div className="panel">
          <StoreDataForm
            onSubmit={this.subimt}
            onSubmitFail={this.handleSubmitFail}
            isFormValid={isFormValid}
            resetFormStatus={this.resetFormStatus}
          />
        </div>
      </PageFull>
    );
  }
}

New.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => state)(New);
