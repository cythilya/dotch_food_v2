import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Link from 'next/link';
import '../style/components/form.css';

const StoreDataForm = (props) => {
  const {
    isFormValid,
    resetFormStatus,
    handleSubmit,
    pristine,
    reset,
    submitting,
    handlenSubmitFail
  } = props;
  const showForm = isFormValid !== 2 ? '' : 'hide';
  const showErrMsg = !isFormValid ? '' : 'hide';
  const showSuccessMsg = isFormValid === 2 ? '' : 'hide';

  return (
    <div>
      <div className={`${showErrMsg}`}>
        <div className="alert alert--danger">
          <div className="alert--icon">
            &#x02717;
          </div>
          <div className="alert--content">
            資料有誤，請重新再試一次
          </div>
        </div>
      </div>
      <div className={showSuccessMsg}>
        <div className="alert alert--success">
          <div className="alert--icon">
            &#x02713;
          </div>
          <div className="alert--content">
            送出成功！
          </div>
        </div>
        <div className="item-group">
          <Link href="/">
            <a
              className="button--default"
              title="回首頁"
            >
              回首頁
            </a>
          </Link>
          <button
            type="button"
            onClick={() => {
              reset();
              resetFormStatus(1);
            }}
            className="button--default"
          >
            再新增一筆資料
          </button>
        </div>
      </div>
      <div className={showForm}>
        <h1 className="form__main-heading mb-2x">
          我要推薦店家！
        </h1>
        <form
          className="form form-store-info"
          onSubmit={handleSubmit}
          onSubmitFail={handlenSubmitFail}
        >
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
          <div className="alert alert--info">
            <div className="alert--icon">
              &#x00021;
            </div>
            <div className="alert--content">
              感謝推薦！資料審核需約一週，請耐心等候。審核通過就會出現在頁面上！
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
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'storeData',
})(StoreDataForm);
