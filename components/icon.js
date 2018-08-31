import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../style/generals/sprites/symbol/svg/sprite.symbol.svg';

const Icon = ({
  name,
  size,
  fill,
  title,
  className,
  inContent,
}) => {
  const style = {
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      fill={fill}
      role="img"
      title={title}
      aria-label={title}
      style={inContent ? style : null}
    >
      { title
        && (
        <title>
          {
            title
          }
        </title>
        )
      }
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  inContent: PropTypes.bool,
};

Icon.defaultProps = {
  size: 20,
  fill: '#fff',
  title: '',
  className: '',
  inContent: false,
};

export default Icon;
