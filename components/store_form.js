import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Link from 'next/link';
import PropTypes from 'prop-types';
import '../style/components/form.css';

const StoreDataForm = (props) => {
  const {
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
    <div>
      <div className={`${showErrMsg}`}>
        <div className="alert alert--danger">
          <div className="alert--icon">
            &#x02717;
          </div>
          <div className="alert--content">
            嗚嗚出錯了，請重新再試一次
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
          onSubmitFail={handleSubmitFail}
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
            <div className="form__group">
              <label className="form__label">
                分類
              </label>
              <div className="form__field-list">
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="ricebowl"
                    component="input"
                  />
                  <label className="form__hint">中式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="dimsum"
                    component="input"
                  />
                  <label className="form__hint">港式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="rice"
                    component="input"
                  />
                  <label className="form__hint">家常菜</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="noodles"
                    component="input"
                  />
                  <label className="form__hint">小吃</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="lunchbox"
                    component="input"
                  />
                  <label className="form__hint">便當</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="selfservice"
                    component="input"
                  />
                  <label className="form__hint">自助餐</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="japanesefood"
                    component="input"
                  />
                  <label className="form__hint">日式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="sushi"
                    component="input"
                  />
                  <label className="form__hint">壽司</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="beer"
                    component="input"
                  />
                  <label className="form__hint">居酒屋</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="skewer"
                    component="input"
                  />
                  <label className="form__hint">串燒</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="americanfood"
                    component="input"
                  />
                  <label className="form__hint">美式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="burger"
                    component="input"
                  />
                  <label className="form__hint">漢堡</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="steak"
                    component="input"
                  />
                  <label className="form__hint">牛排</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="friedchicken"
                    component="input"
                  />
                  <label className="form__hint">炸雞</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="popcorn"
                    component="input"
                  />
                  <label className="form__hint">速食</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="beerbar"
                    component="input"
                  />
                  <label className="form__hint">酒吧</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="italianfood"
                    component="input"
                  />
                  <label className="form__hint">義式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="spaguetti"
                    component="input"
                  />
                  <label className="form__hint">義大利麵</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="sashimi"
                    component="input"
                  />
                  <label className="form__hint">韓式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="thaifood"
                    component="input"
                  />
                  <label className="form__hint">泰式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="croissant"
                    component="input"
                  />
                  <label className="form__hint">法式料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="curry"
                    component="input"
                  />
                  <label className="form__hint">印度料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="merlion"
                    component="input"
                  />
                  <label className="form__hint">星馬南洋料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="wok"
                    component="input"
                  />
                  <label className="form__hint">異國料理</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="foodtruck"
                    component="input"
                  />
                  <label className="form__hint">小販餐車</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="cafe"
                    component="input"
                  />
                  <label className="form__hint">複合餐飲</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="barbecue"
                    component="input"
                  />
                  <label className="form__hint">燒烤</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="pot"
                    component="input"
                  />
                  <label className="form__hint">火鍋</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="buffet"
                    component="input"
                  />
                  <label className="form__hint">吃到飽</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="tray"
                    component="input"
                  />
                  <label className="form__hint">鐵板燒</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="brunch"
                    component="input"
                  />
                  <label className="form__hint">早午餐</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="salad"
                    component="input"
                  />
                  <label className="form__hint">輕食</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="cake"
                    component="input"
                  />
                  <label className="form__hint">甜點</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="dessert"
                    component="input"
                  />
                  <label className="form__hint">下午茶</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="toast"
                    component="input"
                  />
                  <label className="form__hint">烘焙糕點</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="coffee"
                    component="input"
                  />
                  <label className="form__hint">咖啡</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="tea"
                    component="input"
                  />
                  <label className="form__hint">茶</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="drink"
                    component="input"
                  />
                  <label className="form__hint">咖啡茶飲</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="crab"
                    component="input"
                  />
                  <label className="form__hint">海鮮</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="lettuce"
                    component="input"
                  />
                  <label className="form__hint">素食</label>
                </div>
                <hr />
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="lowprice"
                    component="input"
                  />
                  <label className="form__hint">平價</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="baking"
                    component="input"
                  />
                  <label className="form__hint">DIY</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="doll"
                    component="input"
                  />
                  <label className="form__hint">主題特色</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="superheroe"
                    component="input"
                  />
                  <label className="form__hint">漫畫雜誌</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="socialmedia"
                    component="input"
                  />
                  <label className="form__hint">拍照打卡</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="sofa"
                    component="input"
                  />
                  <label className="form__hint">沙發</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="movie"
                    component="input"
                  />
                  <label className="form__hint">桌邊服務</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="review"
                    component="input"
                  />
                  <label className="form__hint">特別推薦</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="baker"
                    component="input"
                  />
                  <label className="form__hint">無菜單</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="delivery"
                    component="input"
                  />
                  <label className="form__hint">外送</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="instant"
                    component="input"
                  />
                  <label className="form__hint">調理包</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="network"
                    component="input"
                  />
                  <label className="form__hint">網咖</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="other"
                    component="input"
                  />
                  <label className="form__hint">其他</label>
                </div>
              </div>
            </div>
            <div className="form__group">
              <label className="form__label">
                特色
              </label>
              <div className="form__field-list">
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="twentyfourhr"
                    component="input"
                  />
                  <label className="form__hint">24 小時營業</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="mrt"
                    component="input"
                  />
                  <label className="form__hint">捷運沿線</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="noTimeLimit"
                    component="input"
                  />
                  <label className="form__hint">不限時</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="parking"
                    component="input"
                  />
                  <label className="form__hint">附近有停車位</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="socket"
                    component="input"
                  />
                  <label className="form__hint">提供插座</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="takeout"
                    component="input"
                  />
                  <label className="form__hint">可外帶</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="wifi"
                    component="input"
                  />
                  <label className="form__hint">免費 Wifi</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="cashOnly"
                    component="input"
                  />
                  <label className="form__hint">只接受現金</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="customService"
                    component="input"
                  />
                  <label className="form__hint">客製化服務</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="family"
                    component="input"
                  />
                  <label className="form__hint">親子友善</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="pet"
                    component="input"
                  />
                  <label className="form__hint">寵物友善</label>
                </div>
                <div className="form__filed-item">
                  <Field
                    type="checkbox"
                    name="pokemon"
                    component="input"
                  />
                  <label className="form__hint">有寶可夢補給站</label>
                </div>
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

StoreDataForm.propTypes = {
  isFormValid: PropTypes.number.isRequired,
  resetFormStatus: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmitFail: PropTypes.func.isRequired,
};

StoreDataForm.defaultProps = {};

export default reduxForm({
  form: 'storeData',
})(StoreDataForm);
