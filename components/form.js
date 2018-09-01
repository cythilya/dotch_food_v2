import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import { reducer as formReducer } from 'redux-form';
import { saveStoreData } from '../actions/index';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)