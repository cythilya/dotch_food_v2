import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import '../../style/components/card.css';
import StoreControlButtons from './store_control_buttons';

const Card = ({ store }) => {
  return (
    <div
      key={store.id}
      styleName="card"
    >
      <LazyLoad offsetVertical="100">
        <figure>
          <picture>
            <source
              media="(min-width: 1080px)"
              srcSet={`${store.image[6].url} 1x, ${store.image[8].url} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 1080px)"
              srcSet={`${store.image[2].url}} 1x, ${store.image[4].url} 2x`}
              type="image/jpeg"
            />
            <source
              media="(min-width: 840px)"
              srcSet={`${store.image[5].url}} 1x, ${store.image[6].url} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 840px)"
              srcSet={`${store.image[1].url}} 1x, ${store.image[2].url} 2x`}
              type="image/jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${store.image[6].url} 1x, ${store.image[8].url} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${store.image[2].url} 1x, ${store.image[4].url} 2x`}
              type="image/jpeg"
            />
            <source
              media="(min-width: 568px)"
              srcSet={`${store.image[6].url} 1x, ${store.image[8].url} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 568px)"
              srcSet={`${store.image[2].url} 1x, ${store.image[4].url} 2x`}
              type="image/jpeg"
            />
            <source
              media="(min-width: 375px)"
              srcSet={store.image[7].url}
              type="image/webp"
            />
            <source
              media="(min-width: 375px)"
              srcSet={store.image[3].url}
              type="image/jpeg"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${store.image[6].url} 1x, ${store.image[8].url} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${store.image[2].url} 1x, ${store.image[4].url} 2x`}
              type="image/jpeg"
            />
            <source
              media="(man-width: 319px)"
              srcSet={`${store.image[5].url} 1x, ${store.image[6].url} 2x`}
              type="image/webp"
            />
            <source
              media="(man-width: 319px)"
              srcSet={`${store.image[1].url} 1x, ${store.image[2].url} 2x`}
              type="image/jpeg"
            />
            <img styleName="card__image" src={store.image[4].url} alt={store.name} />
          </picture>
          <figcaption className="hide">
            {store.name}
          </figcaption>
        </figure>
      </LazyLoad>
      <div styleName="card__container">
        <h2 styleName="card__title">
          <Link
            to={`/store/${store.id}`}
            title={store.name}
          >
            {store.name}
          </Link>
        </h2>
        <div styleName="card__tag-list">
          {
            store.tags.map((item) => {
              return (
                <div key={item} styleName="card__tag-item">
                  <Link
                    className="card__tag-link"
                    to={`/tags/${item}`}
                    title={item}
                  >
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

Card.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Card;
