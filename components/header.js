import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { common } from '../data/locale_tw';
import '../style/components/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSeachHandler = this.onSeachHandler.bind(this);
  }

  onInputChange(keyword) {
    this.setState({ keyword });
  }

  onSeachHandler(e) {
    if (e.key === 'Enter') {
      const keyword = e.target.value;
      Router.push(`/tag?keyword=${keyword}`);
    }
  }

  render() {
    const { keyword } = this.state;

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
            value={keyword}
            onChange={e => this.onInputChange(e.target.value)}
            onKeyPress={e => this.onSeachHandler(e)}
          />
          <button
            type="button"
            className="header__searchbox__cancel"
            onClick={() => this.onInputChange('')}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Header);
