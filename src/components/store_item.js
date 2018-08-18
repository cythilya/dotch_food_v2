import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../style/components/store_item.css';

const StoreItem = ({ store }) => {
  return (
    <div
      key={store.id}
      styleName="store-item"
    >
      <img
        styleName="store-item__image"
        alt={store.name}
        src={store.image[0].url}
      />
      <div styleName="store-item__container">
        <h2 styleName="store-item__title">
          <Link
            to={`/store/${store.id}`}
            title={store.name}
          >
            {store.name}
          </Link>
        </h2>
        <div styleName="store-item__description ">
          {store.description}
        </div>
        <ul styleName="store-item__detail" className="unordered-list-circle">
          <li>
            地址：
            {store.location.address}
          </li>
          <li>
            電話：
            {store.phone}
          </li>
          <li>
            營業時間：
            {store.openingHour.start}
            ~
            {store.openingHour.end}
          </li>
          <li>
            價位：
            {store.price.lowest}
            ~
            {store.price.highest}
          </li>
          <li>
            網站介紹：
            <Link
              to={store.sns.website}
              title={store.name}
              target="_blank"
            >
              {store.name}
            </Link>
          </li>
        </ul>
        <div styleName="store-item__tag-list">
          {
            store.tags.map((item) => {
              return (
                <div key={item} styleName="store-item__tag-item">
                  <Link className="store-item__tag-link" to={`/tags/${item}`}>
                    {item}
                  </Link>
                </div>
              );
            })
          }
        </div>
        <div styleName="store-item__button-group">
          { store.booking.phone
            && (
            <a
              title="電話訂位"
              href={`tel:${store.booking.phone}`}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              電話訂位
            </a>
            )
          }
          { store.booking.online
            && (
            <a
              title="線上訂位"
              href={`${store.booking.online}`}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              線上訂位
            </a>
            )
          }
          <a
            href={`https://www.google.com.tw/maps/search/${store.location.address}`}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            導航
          </a>
        </div>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreItem;
