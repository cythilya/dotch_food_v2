import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import '../../style/components/header.css';
import data from '../data/data';

const { hotTagsObj } = data;

const Header = () => {
  return (
    <div styleName="header">
      <div styleName="header__nav">
        <Link
          to="/"
          title="吃什麼，どっち"
        >
          <span
            styleName="header__logo"
            className="logo"
            title="吃什麼，どっち"
          />
        </Link>
        <Link
          to="/"
          title="吃什麼，どっち"
        >
          <span styleName="header__title">
            吃什麼，どっち
          </span>
        </Link>
      </div>
      <div styleName="header__searchbox">
        <Dropdown
          icon="search"
          placeholder="有什麼好吃的？"
          inline
          search
          selection
          options={hotTagsObj}
          noResultsMessage="找不到！"
        />
      </div>
    </div>
  );
};

export default Header;
