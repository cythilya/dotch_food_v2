import React from 'react';
import { Link } from 'react-router-dom';
// import Icon from './icon';
import '../../style/components/header.css';
import { common } from '../data/locale_tw';

const Header = () => {
  return (
    <div styleName="header">
      <div styleName="header__nav">
        <Link
          to="/"
          title={common.title}
        >
          <i
            styleName="header__logo header__logo__image"
            className="icon-logo"
          />
          {/* <Icon
            name="logo"
            className="header__logo"
            title={common.title}
            size={40}
          /> */}
        </Link>
        <Link
          to="/"
          title={common.title}
        >
          <span styleName="header__title">
            { common.title }
          </span>
        </Link>
      </div>
      <div styleName="header__searchbox">
        <input
          id="search-input"
          styleName="header__search-input"
          placeholder="有什麼好吃的？"
          aria-label="有什麼好吃的？"
        />
      </div>
    </div>
  );
};

export default Header;
