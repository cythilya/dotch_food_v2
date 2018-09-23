import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import '../style/components/form.css';
import '../style/components/alert.css';
import '../style/components/store_info.css';
import '../style/components/comment_form.css';

const required = value => value ? undefined : '必填'

const renderTextField = ({ input, placeholder, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} type="text" className="form__input-text" placeholder={placeholder} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <select {...input} className="form__select">
      {children}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const CommentDataForm = (props) => {
  const {
    id,
    storeid,
    closeForm,
    isFormValid,
    resetFormStatus,
    handleSubmit,
    pristine,
    reset,
    submitting,
    handleSubmitFail,
  } = props;
  const showForm = isFormValid !== 2 ? '' : 'hide';
  const showErrMsg = !isFormValid ? '' : 'hide';
  const showSuccessMsg = isFormValid === 2 ? '' : 'hide';

  return (
    <div className="comment-form">
      <div className={showForm}>
        <div className="comment-form__main-title">
          <h1 className="form__main-heading mb-2x">
            我要給評價！
          </h1>
          <i
            className="comment-form__close"
            onClick={closeForm}
            onKeyDown={closeForm}
          >
            X
          </i>
        </div>
        <form
          className="form form-store-info"
          onSubmit={handleSubmit}
          onSubmitFail={handleSubmitFail}
        >
          <div className="form__block">
            <div className="form__group">
              <label
                className="form__label"
                htmlFor="user"
              >
                暱稱
              </label>
              <div className="form__field">
                <Field
                  type="text"
                  component={renderTextField}
                  id="user"
                  name="user"
                  placeholder="請問您的大名是？"
                  className="form__input-text"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form__group">
              <label
                className="form__label"
                htmlFor="rating"
              >
                評等
              </label>
              <div className="form__field">
                <Field
                  component={renderSelectField}
                  id="rating"
                  name="rating"
                  validate={[required]}
                >
                  <option>
                    請選擇評等
                  </option>
                  <option value="5">
                    5 星級！真是太棒了 (撒花)
                  </option>
                  <option value="4">
                    4 顆星！很好的體驗！
                  </option>
                  <option value="3">
                    3 顆星，還可以摟！
                  </option>
                  <option value="2">
                    2 顆星，普普通通 XD
                  </option>
                  <option value="1">
                    1 顆星，有待加強
                  </option>
                </Field>
              </div>
            </div>
            <div className="form__group">
              <label
                className="form__label"
                htmlFor="meal"
              >
                餐別
              </label>
              <div className="form__field">
                <Field
                  component={renderSelectField}
                  id="meal"
                  name="meal"
                  validate={[required]}
                >
                  <option>
                    請選擇餐別
                  </option>
                  <option value="breakfast">
                    早餐
                  </option>
                  <option value="brunch">
                    早午餐
                  </option>
                  <option value="lunch">
                    午餐
                  </option>
                  <option value="afternoontea">
                    下午茶
                  </option>
                  <option value="dinner">
                    晚餐
                  </option>
                  <option value="midnightsnack">
                    宵夜
                  </option>
                  <option value="other">
                    其他
                  </option>
                </Field>
              </div>
            </div>
            <div className="form__group">
              <label
                className="form__label"
                htmlFor="date"
              >
                用餐日期
              </label>
              <div className="form__field">
                <Field
                  type="text"
                  component={renderTextField}
                  id="date"
                  name="date"
                  placeholder="yyyy/mm/dd"
                  className="form__input-text"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form__group">
              <label
                htmlFor="content"
                className="form__label"
              >
                內容
              </label>
              <div className="form__field">
                <Field
                  type="text"
                  component={renderTextField}
                  id="content"
                  name="content"
                  placeholder="想說什麼呢？"
                  className="form__input-text"
                  validate={[required]}
                />
              </div>
            </div>
            <Field
              type="text"
              component="input"
              name="docid"
              value={id}
              className="hide"
            />
            <Field
              type="text"
              component="input"
              name="id"
              value={storeid}
              className="hide"
            />
          </div>
          <div className="form__button-group">
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
            感謝您的意見！資料審核需約一週，請耐心等候。審核通過就會出現在頁面上！
          </div>
        </div>
        <div className="form__button-group">
          <button
            type="button"
            onClick={() => {
              reset();
              resetFormStatus(1);
              closeForm(1);
            }}
            className="button--default"
          >
            點我關閉
          </button>
        </div>
      </div>
    </div>
  );
};

CommentDataForm.propTypes = {
  id: PropTypes.string.isRequired,
  storeid: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
  isFormValid: PropTypes.number.isRequired,
  resetFormStatus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmitFail: PropTypes.func.isRequired,
};

CommentDataForm.defaultProps = {};

export default reduxForm({
  form: 'commentData',
})(CommentDataForm);
