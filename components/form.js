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
        <label>
          店家名稱
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="name"
            placeholder="店家名稱"
          />
        </div>
      </div>
      <div>
        <label>
          描述
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="description"
            placeholder="描述"
          />
        </div>
      </div>
      <div>
        <label>
          電話
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="phone"
            placeholder="電話"
          />
        </div>
      </div>
      <div>
        <label>
          地址
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="address"
            placeholder="地址"
          />
        </div>
      </div>
      <div>
        <label>
          預約電話
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="bookingPhone"
            placeholder="預約電話"
          />
        </div>
      </div>
      <div>
        <label>
          預約網址
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="bookingOnline"
            placeholder="預約網址"
          />
        </div>
      </div>
      <div>
        <label>
          網站
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="website"
            placeholder="網站"
          />
        </div>
      </div>
      <div>
        <label>
          Facebook
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="facebook"
            placeholder="Facebook"
          />
        </div>
      </div>
      <div>
        <label>
          標籤
        </label>
        <div>
          <Field
            type="text"
            component="input"
            name="tags"
            placeholder="標籤"
          />
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