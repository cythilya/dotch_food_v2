import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import Link from 'next/link';
import Router from 'next/router';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/core";
import {
  login,
  logout,
  restoreUserInfo,
} from '../actions/index';
import { DOTCH_FOOD_COOKIE_KEY } from '../constants';
import {
  common,
  menu,
} from '../data/data';
import '../style/components/header.css';

const MODAL_TYPE = {
  LOGIN: 'login',
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: null,
      keyword: '',
      modalType: null,
      password: null,
    };

    this.onSeachHandler = this.onSeachHandler.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.renderLoginModal = this.renderLoginModal.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.renderMenuList = this.renderMenuList.bind(this);
    this.renderSearchBox = this.renderSearchBox.bind(this);
  }

  componentDidMount() {
    const { dispatch, cookies: { cookies } } = this.props;

    // restore user info from cookie when reload page
    if (cookies && cookies[DOTCH_FOOD_COOKIE_KEY]) {
      dispatch(restoreUserInfo(JSON.parse(cookies[DOTCH_FOOD_COOKIE_KEY])));
    } else {
      dispatch(logout());
    }
  }

  onSearchInputChange(keyword) {
    this.setState({ keyword });
  }

  onAccountInputChange(account) {
    this.setState({ account });
  }

  onPasswordInputChange(password) {
    this.setState({ password });
  }

  onSeachHandler(e) {
    if (e.key === 'Enter') {
      const keyword = e.target.value;
      Router.push(`/tag?keyword=${keyword}`);
    }
  }

  renderMenuList() {
    return (
      <div className="header__menu-list">
        {this.renderMenuItems()}
      </div>
    )
  }

  renderMenuItems() {
    const { isLogin } = this.props.user;

    return _.map(menu, (item) => {
      return (
        (isLogin === item.needLogin) &&
        <div
          key={item.title}
          className="header__menu__item"
        >
          <Link href={item.link}>
            <a
              title={item.title}
              className="header__menu__item__link"
              onClick={() => {
                if (item.modalType === MODAL_TYPE.LOGIN) {
                  this.setState({ modalType: MODAL_TYPE.LOGIN });
                } else if (item.id === 'logout') {
                  this.props.dispatch(logout());
                }
              }}
            >
              <span
                title={item.title}
                className={`header__menu__item__icon icon-${item.icon}`}
              />
              <span className="header__menu__item__title">
                {item.title}
              </span>
            </a>
          </Link>
        </div>
      );
    })
  }

  renderSearchBox() {
    const { keyword } = this.state;

    return (
      <div className="header__searchbox">
        <input
          className="header__search-input"
          placeholder="有什麼好吃的？"
          aria-label="有什麼好吃的？"
          value={keyword}
          onChange={e => this.onSearchInputChange(e.target.value)}
          onKeyPress={e => this.onSeachHandler(e)}
        />
        <button
          type="button"
          className="header__searchbox__cancel"
          onClick={() => this.onSearchInputChange('')}
        >
          x
        </button>
      </div>
    )
  }

  renderLoginModal() {
    const { dispatch } = this.props;
    const { modalType } = this.state;

    return (
      <Modal
        isOpen={modalType === MODAL_TYPE.LOGIN}
        onClose={() => { this.setState({modalType: null}); }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log On</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="account">Account</FormLabel>
              <Input
                type="text"
                id="account"
                placeholder="Account"
                onChange={e => this.onAccountInputChange(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                onChange={e => this.onPasswordInputChange(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                const { account, password } = this.state;
                const result = dispatch(login(account, password, () => {
                  this.setState({ modalType: null })
                }));
              }}
            >
              Log On
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  render() {
    const { modalType } = this.state;

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
          {this.renderSearchBox()}
          {this.renderMenuList()}
          {this.renderLoginModal()}
          {modalType === MODAL_TYPE.LOGON && this.renderLoginModal()}
      </div>
    );
  }
}

export default withCookies(connect(state => state)(Header));
