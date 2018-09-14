import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import StoreControlButtons from './store_control_button';
import { icon as iconData } from '../data/locale_tw';
import '../style/components/store_item.css';

const StoreItem = ({ store }) => {
  const boxStyle = {
    background: '#e8e8e8',
    width: '175px',
    height: '175px',
  };

  return (
    <div>
      <div
        key={store.id}
        className="store-item"
      >
        <div className="store-item__image" style={boxStyle}>
          <LazyLoad offsetVertical={100} height={175}>
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
                <img src={store.image[1].url} alt={store.name} />
              </picture>
              <figcaption className="hide">
                {store.name}
              </figcaption>
            </figure>
          </LazyLoad>
        </div>
        <div className="store-item__container">
          <h2 className="store-item__title">
            <Link href={`/store/?id=${store.id}`}>
              <a title={store.name}>
                {store.name}
              </a>
            </Link>
          </h2>
          <div className="store-item__description ">
            {store.description}
          </div>
          <ul className="store-item__detail">
            <li className="store-item__detail__item">
              <i
                className="store-item__detail__item__icon icon-pin-map"
                title={iconData.address}
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
            <li className="store-item__detail__item">
              <i
                className="store-item__detail__item__icon icon-phone"
                title={iconData.phone}
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
            <li className="store-item__detail__item">
              <i
                className="store-item__detail__item__icon icon-clock-circular-outline"
                title={iconData.openingHour}
              />
              {store.openingHour.start}
              ~
              {store.openingHour.end}
            </li>
            <li className="store-item__detail__item">
              <i
                className="store-item__detail__item__icon icon-dollar"
                title={iconData.price}
              />
              {store.price.lowest}
              ~
              {store.price.highest}
            </li>
            <li className="store-item__detail__item">
              <i
                className="store-item__detail__item__icon icon-global"
                title={iconData.website}
              />
              <a
                title={store.name}
                href={`${store.sns.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {store.name}
              </a>
            </li>
          </ul>
          <div className="store-item__tag-list">
            {
              store.tags.map((item) => {
                return (
                  <div key={item} className="store-item__tag-item">
                    <Link href={`/tag?keyword=${item}`}>
                      <a
                        className="store-item__tag-link"
                        title={item}
                      >
                        {item}
                      </a>
                    </Link>
                  </div>
                );
              })
            }
          </div>
          <StoreControlButtons store={store} />
        </div>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreItem;
