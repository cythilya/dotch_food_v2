import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import StoreControlButtons from './store_control_button';
import { icon as iconData } from '../data/data';
import '../style/components/card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChangeFavStatus: false,
      isFavorite: false,
    };

    this.handleAddFavList = this.handleAddFavList.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isFavorite: preIsFavorite } = prevState;
    const { isFavorite } = this.state;

    if (preIsFavorite !== isFavorite) {
      this.setState({ isChangeFavStatus: true }, () => {
        setTimeout(() => {
          this.setState({ isChangeFavStatus: false });
        }, 300);
      });
    }
  }

  handleAddFavList() {
    const { isFavorite: isFavoriteState } = this.state;

    this.setState({isFavorite: !isFavoriteState});
  }

  render() {
    const { store } = this.props;
    const { isFavorite, isChangeFavStatus } = this.state;
    const title = isFavorite ? iconData.removeFav : iconData.addFav;
    const iconStyle = isFavorite ? 'icon-heart-full' : 'icon-heart-empty';
    const flashStyle = isChangeFavStatus ? 'clicked' : '';

    return (
      <div
        className="card"
        key={store.id}
      >
        <a
          title={title}
          className={`card__fav-button button--transparent ${flashStyle}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.handleAddFavList}
        >
          <span
            className={`card__fav-icon ${iconStyle}`}
            title={title}
          />
        </a>
        <LazyLoad offsetVertical={100}>
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
              <img
                className="card__image"
                src={store.image[4].url}
                alt={store.name}
              />
            </picture>
            <figcaption className="hide">
              {store.name}
            </figcaption>
          </figure>
        </LazyLoad>
        <div className="card__container">
          <h2 className="card__title">
            <Link href={`/store?id=${store.id}`}>
              <a title={store.name}>
                {store.name}
              </a>
            </Link>
          </h2>
          <div className="card__tag-list">
            {
              store.tags.map((item) => {
                return (
                  <div key={item} className="card__tag-item">
                    <Link href={`/tag?keyword=${item}`}>
                      <a
                        title={item}
                        className="card__tag-link"
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
    );
  }
}

Card.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Card;
