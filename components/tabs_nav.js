import React from 'react';
import PropTypes from 'prop-types';

const TabsNav = ({ nav, activeIndex, onClickTabNavHandler }) => {
  const activeClass = nav.id === activeIndex ? 'selected' : '';

  return (
    <div
      key={nav.title}
      className={`tabs__nav__item ${activeClass}`}
      title={nav.title}
      onClick={() => onClickTabNavHandler(nav.id)}
      onKeyDown={() => onClickTabNavHandler(nav.id)}
    >
      {nav.title}
    </div>
  );
};

TabsNav.propTypes = {
  nav: PropTypes.object.isRequired,
  onClickTabNavHandler: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default TabsNav;
