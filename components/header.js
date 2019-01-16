import React from 'react';
import Link from 'next/link';
import { common } from '../data/locale_tw';
import '../style/components/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <Link href="/">
          <a title={common.title}>
            <i
              className="header__logo icon-logo"
              aria-label={common.title}
            />
          </a>
        </Link>
        <Link href="/">
          <a
            className="header__title"
            title={common.title}
          >
            { common.title }
          </a>
        </Link>
      </div>
      <div className="header__searchbox">
        <input
          className="header__search-input"
          placeholder="有什麼好吃的？"
          aria-label="有什麼好吃的？"
        />
        <button
          type="submit"
          className="button header__submit"
        >
          送出
        </button>
      </div>
    </div>
  );
};

export default Header;
