import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import '../../style/components/header.css';
import Icon from './icon';
import data from '../data/data';
import { common } from '../data/locale_tw';

const { hotTagsObj } = data;

const Header = () => {
  return (
    <div styleName="header">
      <div styleName="header__nav">
        <Link
          to="/"
          title={common.title}
        >
          <Icon
            name="logo"
            className="header__logo"
            title={common.title}
            size="40"
          />
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
