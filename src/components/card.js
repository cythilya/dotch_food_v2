import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../style/components/card.css';

const Card = ({ store }) => {
  return (
    <div styleName="card">
      <img
        styleName="card__image"
        src={store.image[0].url}
        alt={store.name}
      />
      <div styleName="card__container">
        <h2 styleName="card__title">
          <Link to={`/store/${store.id}`}>
            {store.name}
          </Link>
        </h2>
        <div styleName="card__tag-list">
          {
            store.tags.map((item) => {
              return (
                <div key={item} styleName="card__tag-item">
                  <Link className="card__tag-link" to={`/tags/${item}`}>
                    {item}
                  </Link>
                </div>
              );
            })
          }
        </div>
        <div styleName="card__button-group">
          <a href={`tel:${store.phone}`} className="button" title="電話訂位">
            電話訂位
          </a>
          { store.sns.onlineBooking
            && (
            <a
              title="線上訂位"
              href={`${store.sns.onlineBooking}`}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              線上訂位
            </a>
            )
          }
          <a
            title="導航"
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

Card.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Card;
