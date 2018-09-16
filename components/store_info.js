import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import StoreControlButtons from './store_control_button';
import FeatureList from './feature_list';
import { icon as iconData } from '../data/locale_tw';
import '../style/components/store_info.css';
import '../style/components/tab.css';

const StoreInfo = ({ store }) => {
  const boxStyle = {
    background: '#e8e8e8',
    width: '175px',
    height: '175px',
  };

  return (
    <div>
      <div
        key={store.id}
        className="store-info"
      >
        <div className="store-info__image" style={boxStyle}>
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
        <div className="store-info__container">
          <div className="store-info__description ">
            {store.description}
          </div>
          <ul className="store-info__detail">
            <li className="store-info__detail__item">
              <i
                className="store-info__detail__item__icon icon-pin-map"
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
            <li className="store-info__detail__item">
              <i
                className="store-info__detail__item__icon icon-phone"
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
            <li className="store-info__detail__item">
              <i
                className="store-info__detail__item__icon icon-clock-circular-outline"
                title={iconData.openingHour}
              />
              {store.openingHour.start}
              ~
              {store.openingHour.end}
            </li>
            <li className="store-info__detail__item">
              <i
                className="store-info__detail__item__icon icon-dollar"
                title={iconData.price}
              />
              {store.price.lowest}
              ~
              {store.price.highest}
            </li>
            <li className="store-info__detail__item">
              <i
                className="store-info__detail__item__icon icon-global"
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
          { store.features && <FeatureList features={store.features} /> }
          <div className="store-info__tag-list">
            {
              store.tags.map((item) => {
                return (
                  <div key={item} className="store-info__tag-item">
                    <Link href={`/tag?keyword=${item}`}>
                      <a
                        className="store-info__tag-link"
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

StoreInfo.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreInfo;
