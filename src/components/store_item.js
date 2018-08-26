import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import '../../style/components/store_item.css';
import Icon from './icon';
import StoreControlButtons from './store_control_buttons';
import { icon as iconData } from '../data/locale_tw';

const StoreItem = ({ store }) => {
  const iconColor = '#aaa';

  return (
    <div
      key={store.id}
      styleName="store-item"
    >
      <LazyLoad offsetVertical="100">
        <figure>
          <picture>
            <source
              media="all"
              srcSet={`${store.image[5].url} 1x, ${store.image[6].url} 2x`}
              type="image/webp"
            />
            <source
              media="all"
              srcSet={`${store.image[1].url} 1x, ${store.image[2].url} 2x`}
              type="image/jpeg"
            />
            <img styleName="store-item__image" src={store.image[1].url} alt={store.name} />
          </picture>
          <figcaption className="hide">
            {store.name}
          </figcaption>
        </figure>
      </LazyLoad>
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
        <ul styleName="store-item__detail">
          <li styleName="store-item__detail__item">
            <Icon
              name="pin-map"
              title={iconData.address}
              size="14"
              fill={iconColor}
              inContent
            />
            <a
              title={iconData.navigation}
              href={`https://www.google.com.tw/maps/search/${store.location.address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {store.location.address}
            </a>
          </li>
          <li styleName="store-item__detail__item">
            <Icon
              name="phone"
              title={iconData.phone}
              size="14"
              fill={iconColor}
              inContent
            />
            <a
              title={iconData.phone}
              href={`${store.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {store.phone}
            </a>
          </li>
          <li styleName="store-item__detail__item">
            <Icon
              name="clock-circular-outline"
              title={iconData.openingHour}
              size="14"
              fill={iconColor}
              inContent
            />
            {store.openingHour.start}
            ~
            {store.openingHour.end}
          </li>
          <li styleName="store-item__detail__item">
            <Icon
              name="dollar"
              title={iconData.price}
              size="14"
              fill={iconColor}
              inContent
            />
            {store.price.lowest}
            ~
            {store.price.highest}
          </li>
          <li styleName="store-item__detail__item">
            <Icon
              name="global"
              title={iconData.website}
              size="14"
              fill={iconColor}
              inContent
            />
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
        <StoreControlButtons store={store} />
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreItem;
