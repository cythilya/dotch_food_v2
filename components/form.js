import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style/components/form.css';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form
      className="form form-store-info"
      onSubmit={handleSubmit}
    >
      <h1 className="form__main-heading">我要推薦店家！</h1>
      <div className="form__block">
        <h2 className="form__title">Step 1：基本資料</h2>
        <div className="form__group">
          <label className="form__label">
            店家名稱
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="name"
              placeholder="店家名稱"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            描述
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="description"
              placeholder="描述"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            電話
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="phone"
              placeholder="電話"
              className="form__input-text"
            />
            <Field
              type="text"
              component="checkbox"
              name="isBookPhone"
              className="form__input-checkbox"
            />
            <input type="checkbox" />可電話預約？
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            地址
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="address"
              placeholder="地址"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            預約電話
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="bookingPhone"
              placeholder="預約電話"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            預約網址
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="bookingOnline"
              placeholder="預約網址"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            網站
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="website"
              placeholder="網站"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            Facebook
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="facebook"
              placeholder="Facebook"
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            標籤
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="tags"
              placeholder="標籤"
              className="form__input-text"
            />
          </div>
        </div>
      </div>
      <div className="form__button-group">
        <button type="button"
          disabled={pristine || submitting} onClick={reset}
          className="button--default"
        >
          取消
        </button>
        <button
          type="submit"
          disabled={pristine || submitting}
          className="button"
        >
          提交
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
