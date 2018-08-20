import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../style/components/card.css';
import StoreControlButtons from './store_control_buttons';

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
        <StoreControlButtons store={store} />
      </div>
    </div>
  );
};

Card.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Card;
