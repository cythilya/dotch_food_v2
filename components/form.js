import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../style/components/form.css';

const StoreDataForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <form
      className="form form-store-info"
      onSubmit={handleSubmit}
    >
      <h1 className="form__main-heading mb-2x">我要推薦店家！</h1>
      <div className="form__block">
        <div className="form__group">
          <label className="form__label">
            店家名稱
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="name"
              placeholder=""
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
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            圖片名稱
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="image"
              placeholder="v1535796583/kitty-outline-512"
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
              placeholder=""
              className="form__input-text"
            />
            <Field
              type="checkbox"
              name="isBookingPhone"
              component="input"
            />
            <label className="form__hint">可電話預約？</label>
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
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            郵遞區號（Zip）
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="zip"
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            營業時間 Start
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="start"
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            營業時間 End
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="end"
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            最低價格
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="lowest"
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label">
            最高價格
          </label>
          <div className="form__field">
            <Field
              type="text"
              component="input"
              name="highest"
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
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
              placeholder=""
              className="form__input-text"
            />
          </div>
        </div>
      </div>
      <div className="form__button-group">
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          className="button--default"
        >
          清空 / 取消
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
  form: 'storeData',
})(StoreDataForm);
