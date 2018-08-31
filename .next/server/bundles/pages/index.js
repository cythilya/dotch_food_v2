module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchStoreList */
/* unused harmony export fetchStoreListByTag */
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchNearbyStoreList;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchRecommendStoreList;
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchHotStoreList;
/* unused harmony export fetchSlidesData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants/index.js");


var firebase = __webpack_require__("firebase");

__webpack_require__("firebase/firestore");

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyC_xPAyKYsvuIuT6mceI_8gow7H3cSo3BI',
    authDomain: 'dotch-food.firebaseapp.com',
    projectId: 'dotch-food'
  });
}

function fetchStoreList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* FETCH_STORE_LIST */],
    payload: firebase.firestore().collection('stores').orderBy('id').get()
  };
}
function fetchStoreListByTag(tag) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* FETCH_STORE_LIST_BY_TAG */],
    payload: firebase.firestore().collection('stores').where("tags.".concat(tag), '==', true).get()
  };
}
function fetchNearbyStoreList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FETCH_NEARBY_STORE_LIST */],
    payload: firebase.firestore().collection('stores').where('nearby', '==', true).limit(4).get()
  };
}
function fetchRecommendStoreList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* FETCH_RECOMMEND_STORE_LIST */],
    payload: firebase.firestore().collection('stores').where('recommend', '==', true).limit(4).get()
  };
}
function fetchHotStoreList() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* FETCH_HOT_STORE_LIST */],
    payload: firebase.firestore().collection('stores').where('hot', '==', true).limit(4).get()
  };
}
function fetchSlidesData() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* FETCH_SLIDES_DATA */],
    payload: firebase.firestore().collection('slideshows').orderBy('id').get()
  };
}

/***/ }),

/***/ "./components/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_lazyload__ = __webpack_require__("react-lazyload");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_control_button__ = __webpack_require__("./components/store_control_button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_components_card_css__ = __webpack_require__("./style/components/card.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_components_card_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_components_card_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/card.js";







var Card = function Card(_ref) {
  var store = _ref.store;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    key: store.id,
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_lazyload___default.a, {
    offsetVertical: 100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 1080px)",
    srcSet: "".concat(store.image[6].url, " 1x, ").concat(store.image[8].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 1080px)",
    srcSet: "".concat(store.image[2].url, "} 1x, ").concat(store.image[4].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 840px)",
    srcSet: "".concat(store.image[5].url, "} 1x, ").concat(store.image[6].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 840px)",
    srcSet: "".concat(store.image[1].url, "} 1x, ").concat(store.image[2].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 768px)",
    srcSet: "".concat(store.image[6].url, " 1x, ").concat(store.image[8].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 768px)",
    srcSet: "".concat(store.image[2].url, " 1x, ").concat(store.image[4].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 568px)",
    srcSet: "".concat(store.image[6].url, " 1x, ").concat(store.image[8].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 568px)",
    srcSet: "".concat(store.image[2].url, " 1x, ").concat(store.image[4].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 375px)",
    srcSet: store.image[7].url,
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 375px)",
    srcSet: store.image[3].url,
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 320px)",
    srcSet: "".concat(store.image[6].url, " 1x, ").concat(store.image[8].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(min-width: 320px)",
    srcSet: "".concat(store.image[2].url, " 1x, ").concat(store.image[4].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(man-width: 319px)",
    srcSet: "".concat(store.image[5].url, " 1x, ").concat(store.image[6].url, " 2x"),
    type: "image/webp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("source", {
    media: "(man-width: 319px)",
    srcSet: "".concat(store.image[1].url, " 1x, ").concat(store.image[2].url, " 2x"),
    type: "image/jpeg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "card__image",
    src: store.image[4].url,
    alt: store.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
    className: "hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, store.name))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/store/".concat(store.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    title: store.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, store.name))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card__tag-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, store.tags.map(function (item) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      key: item,
      className: "card__tag-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/tag?keyword=".concat(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      title: item,
      className: "card__tag-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      }
    }, item)));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__store_control_button__["a" /* default */], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    }
  })));
};

Card.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_list__ = __webpack_require__("./components/tag_list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_components_footer_css__ = __webpack_require__("./style/components/footer.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_components_footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_components_footer_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/footer.js";







var Footer = function Footer(_ref) {
  var categories = _ref.categories,
      topics = _ref.topics;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "app-container footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "footer__column footer__column-2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "footer__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\u5206\u985E"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__tag_list__["a" /* default */], {
    tags: categories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "footer__column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "footer__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "\u71B1\u9580\u8A0E\u8AD6"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "align-row footer__hot-topic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "unordered-list-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(topics, function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      title: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, item.title)));
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "footer__column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "footer__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, "\u95DC\u65BC\u300C\u5403\u4EC0\u9EBC\uFF0C\u3069\u3063\u3061\u300D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    className: "unordered-list-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    title: "\u4EC0\u9EBC\u662F\u300C\u5403\u4EC0\u9EBC\uFF0C\u3069\u3063\u3061\u300D\uFF1F",
    href: "https://cythilya.github.io/2015/02/02/dotchi/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, "\u4EC0\u9EBC\u662F\u300C\u5403\u4EC0\u9EBC\uFF0C\u3069\u3063\u3061\u300D\uFF1F")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    title: "\u806F\u7D61\u6211\u5011",
    href: "https://cythilya.github.io/2015/02/02/dotchi/#disqus_thread",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "\u806F\u7D61\u6211\u5011")))));
};

Footer.propTypes = {
  categories: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
  topics: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_locale_tw__ = __webpack_require__("./data/locale_tw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_components_header_css__ = __webpack_require__("./style/components/header.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_components_header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_components_header_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/header.js";





var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "header__nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    title: __WEBPACK_IMPORTED_MODULE_2__data_locale_tw__["a" /* common */].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "header__logo icon-logo",
    "aria-label": __WEBPACK_IMPORTED_MODULE_2__data_locale_tw__["a" /* common */].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "header__title",
    title: __WEBPACK_IMPORTED_MODULE_2__data_locale_tw__["a" /* common */].title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_2__data_locale_tw__["a" /* common */].title))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    className: "header__search-input",
    placeholder: "\u6709\u4EC0\u9EBC\u597D\u5403\u7684\uFF1F",
    "aria-label": "\u6709\u4EC0\u9EBC\u597D\u5403\u7684\uFF1F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_newsticker__ = __webpack_require__("react-newsticker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_newsticker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_newsticker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tag_list__ = __webpack_require__("./components/tag_list.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_data__ = __webpack_require__("./data/data.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_index_css__ = __webpack_require__("./style/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_index_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/page.js";


 // import NoSSR from 'react-no-ssr';

 // import Slideshow from './slideshow';






var hotCategories = __WEBPACK_IMPORTED_MODULE_7__data_data__["a" /* default */].hotCategories,
    categories = __WEBPACK_IMPORTED_MODULE_7__data_data__["a" /* default */].categories,
    hotTopics = __WEBPACK_IMPORTED_MODULE_7__data_data__["a" /* default */].hotTopics,
    news = __WEBPACK_IMPORTED_MODULE_7__data_data__["a" /* default */].news;

function Page(props) {
  var id = props.id;
  var reverse = id === 'index' ? 'app-container--reverse' : '';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "newsticker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_newsticker___default.a, {
    news: news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "app-container ".concat(reverse),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "app-main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "app-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "panel__main-heading mb-1x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\u71B1\u9580\u4E3B\u984C"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__tag_list__["a" /* default */], {
    tags: hotCategories,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__footer__["a" /* default */], {
    categories: categories,
    topics: hotTopics,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })));
}

Page.propTypes = {
  id: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
  return state;
})(Page));

/***/ }),

/***/ "./components/store_control_button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__ = __webpack_require__("./data/locale_tw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_components_store_control_button_css__ = __webpack_require__("./style/components/store_control_button.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_components_store_control_button_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_components_store_control_button_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/store_control_button.js";






var StoreControlButtons = function StoreControlButtons(_ref) {
  var store = _ref.store;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "store-control-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, store.booking.phone && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "tel:".concat(store.booking.phone),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].phoneBooking,
    className: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "store-control-buttons__icon icon-phone-white",
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].phoneBooking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "button-with-line-breaks-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].phoneBooking))), store.booking.online && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "".concat(store.booking.online),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].onlineBooking,
    className: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "store-control-buttons__icon icon-online-booking",
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].onlineBooking,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "button-with-line-breaks-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].onlineBooking))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "https://www.google.com.tw/maps/search/".concat(store.location.address),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].navigation,
    className: "button",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "store-control-buttons__icon icon-pin-on-map",
    title: __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "button-with-line-breaks-text short-word",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_3__data_locale_tw__["b" /* icon */].navigation))));
};

StoreControlButtons.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (StoreControlButtons);

/***/ }),

/***/ "./components/tag_list.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_components_tag_list_css__ = __webpack_require__("./style/components/tag_list.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_components_tag_list_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_components_tag_list_css__);
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/components/tag_list.js";






var TagList = function TagList(_ref) {
  var tags = _ref.tags;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "tag-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(tags, function (item) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      key: item.id,
      className: "tag-list__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
      href: "/tag?keyword=".concat(item.tag),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      title: item.title,
      className: "tag-list__item__link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      title: item.title,
      className: "tag-list__item__icon icon-".concat(item.className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
      className: "tag-list__item__title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, item.title))));
  }));
};

TagList.propTypes = {
  tags: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (TagList);

/***/ }),

/***/ "./constants/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_STORE_LIST_BY_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_NEARBY_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_RECOMMEND_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_HOT_STORE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_SLIDES_DATA; });
/* unused harmony export FETCH_SLIDES_DATA_SUCCESS */
/* unused harmony export FAILURE */
/* unused harmony export INCREMENT */
/* unused harmony export DECREMENT */
/* unused harmony export RESET */
/* unused harmony export LOAD_DATA */
/* unused harmony export LOAD_DATA_SUCCESS */
/* unused harmony export START_CLOCK */
/* unused harmony export TICK_CLOCK */
var FETCH_STORE_LIST = 'FETCH_STORE_LIST';
var FETCH_STORE_LIST_BY_TAG = 'FETCH_STORE_LIST_BY_TAG';
var FETCH_NEARBY_STORE_LIST = 'FETCH_NEARBY_STORE_LIST'; // 離我最近

var FETCH_RECOMMEND_STORE_LIST = 'FETCH_RECOMMEND_STORE_LIST'; // 猜你想吃

var FETCH_HOT_STORE_LIST = 'FETCH_HOT_STORE_LIST'; // 熱門推薦

var FETCH_SLIDES_DATA = 'FETCH_SLIDES_DATA';
var FETCH_SLIDES_DATA_SUCCESS = 'FETCH_SLIDES_DATA_SUCCESS';
var FAILURE = 'FAILURE';
var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';
var RESET = 'RESET';
var LOAD_DATA = 'LOAD_DATA';
var LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
var START_CLOCK = 'START_CLOCK';
var TICK_CLOCK = 'TICK_CLOCK';

/***/ }),

/***/ "./data/data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var data = {
  hotTags: ['日式料理', '早午餐', '沙拉', '燒烤', '漢堡', '輕食', '牛排', '生魚片', '關東煮', '平價'],
  news: ['今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！', '來自名古屋的早餐，Komeda coffee 鬆軟奶油吐司，南京松江站', '與小熊維尼的午茶約會！新宿「蜂蜜咖啡」限定登場', '七夕就是要浪漫一下！全台精選 10 家特色浪漫景觀餐廳'],
  categories: [{
    id: 'bd3060eb-a952-4a5e-a4ec-b2cb91544786',
    className: 'rice-bowl',
    title: '中式',
    tag: '中式料理'
  }, {
    id: '183bde18-13b3-420e-bdfe-f33d36c26d22',
    className: 'burger',
    title: '美式',
    tag: '美式料理'
  }, {
    id: '4df916eb-6b84-4cd9-a3ba-aa80b89cb9f8',
    className: 'sushi',
    title: '日式',
    tag: '日式料理'
  }, {
    id: '4830b325-3623-4a4e-88d5-91f879baa5e8',
    className: 'dim-sum',
    title: '港式',
    tag: '港式料理'
  }, {
    id: '10283f0d-5e51-4503-8898-bef0d0e67dce',
    className: 'sashimi',
    title: '韓式',
    tag: '韓式料理'
  }, {
    id: '007f4c15-4782-4560-b7c9-f5c91f4ae4bf',
    className: 'thai-food',
    title: '泰式',
    tag: '泰式料理'
  }, {
    id: '15eedeed-0786-405d-bb8a-8e06596f6afe',
    className: 'spaguetti',
    title: '義式',
    tag: '義式料理'
  }, {
    id: '2421f4e0-c479-4c0b-84f9-998b44a7aadd',
    className: 'croissant',
    title: '法式',
    tag: '法式料理'
  }, {
    id: 'a25b7aa8-87b6-4ad3-8cc7-8529190ab006',
    className: 'curry',
    title: '印度',
    tag: '印度料理'
  }, {
    id: '086f0866-1ed4-4d5d-836f-4b42ebaec24d',
    className: 'wok',
    title: '異國',
    tag: '異國料理'
  }, {
    id: '76363331-4912-453c-ab98-4aba16dde936',
    className: 'buffet',
    title: '吃到飽',
    tag: '吃到飽'
  }, {
    id: 'e34686f1-88b3-4219-b5fa-62d49a3a368e',
    className: 'beer',
    title: '酒吧',
    tag: '酒吧'
  }, {
    id: '5cdce9c4-c9b5-425f-b62d-bdc903b56abd',
    className: 'grill',
    title: '燒烤',
    tag: '燒烤'
  }, {
    id: '290a27f2-e3b6-4638-9857-7efbd06dece2',
    className: 'pot',
    title: '火鍋',
    tag: '火鍋'
  }, {
    id: 'e64fe1f3-f627-4041-89e4-1e9ade3ada43',
    className: 'tray',
    title: '鐵板燒',
    tag: '鐵板燒'
  }, {
    id: '84c0e0de-3e65-4ab9-bb9a-2f7433ea4a3c',
    className: 'cake-with-strawberry',
    title: '下午茶',
    tag: '下午茶'
  }, {
    id: 'f3865f75-f4ed-431d-b130-b890b3be444f',
    className: 'lettuce',
    title: '素食',
    tag: '素食'
  }, {
    id: '9011f22f-449c-459f-bd1b-6f2924adb39c',
    className: 'sandwich',
    title: '早午餐',
    tag: '早午餐'
  }, {
    id: '01f558aa-ca2d-4ca2-add7-7ca945dba6e9',
    className: 'noodles',
    title: '小吃',
    tag: '小吃'
  }, {
    id: 'bc41ee12-8b72-4bf4-9961-3919c302301b',
    className: 'breakfast',
    title: '簡餐',
    tag: '簡餐'
  }, {
    id: '11ee2741-7a51-4907-93a4-e38a85bcbad6',
    className: 'toast',
    title: '烘焙糕點',
    tag: '烘焙糕點'
  }, {
    id: 'c5a95896-c009-4af3-83df-aee304b84ea8',
    className: 'takeaway',
    title: '外帶',
    tag: '外帶'
  }, {
    id: 'bea91673-c6b4-4ac3-87b4-b1b9258d9a3e',
    className: 'doll',
    title: '主題特色',
    tag: '主題特色'
  }, {
    id: 'a3af7f04-5183-4e47-9905-8705469506d7',
    className: 'baby-boy',
    title: '親子友善',
    tag: '親子友善'
  }, {
    id: 'e45de147-ab0a-4c26-a077-b23f03c3e51f',
    className: 'pets',
    title: '寵物友善',
    tag: '寵物友善'
  }, {
    id: '4479113d-2297-45b8-9657-a35089d59504',
    className: 'orange-juice',
    title: '咖啡茶飲',
    tag: '飲品'
  }, {
    id: '97c2e5f3-4397-4d47-b80f-88e62521c7f6',
    className: 'dinner-table',
    title: '其他',
    tag: '其他'
  }],
  hotCategories: [{
    id: '1',
    className: 'sushi',
    title: '壽司',
    tag: '壽司'
  }, {
    id: '2',
    className: 'sandwich',
    title: '早午餐',
    tag: '早午餐'
  }, {
    id: '3',
    className: 'grill',
    title: '燒烤',
    tag: '燒烤'
  }, {
    id: '4',
    className: 'burger',
    title: '漢堡',
    tag: '美式料理'
  }, {
    id: '5',
    className: 'salad-bowl',
    title: '輕食',
    tag: '輕食'
  }, {
    id: '6',
    className: 'steak',
    title: '牛排',
    tag: '牛排'
  }, {
    id: '7',
    className: 'piece-of-cake',
    title: '甜點',
    tag: '甜點'
  }, {
    id: '8',
    className: 'dim-sum',
    title: '港式小點',
    tag: '港式料理'
  }, {
    id: '9',
    className: 'low-price',
    title: '平價',
    tag: '平價'
  }, {
    id: '10',
    className: 'beer-bottles',
    title: '居酒屋',
    tag: '居酒屋'
  }, {
    id: '11',
    className: 'coffee',
    title: '咖啡',
    tag: '咖啡'
  }, {
    id: '12',
    className: 'thai-food',
    title: '泰國菜',
    tag: '泰式料理'
  }, {
    id: '13',
    className: 'tea-cup',
    title: '茶',
    tag: '茶'
  }, {
    id: '14',
    className: 'crab',
    title: '海鮮',
    tag: '海鮮'
  }, {
    id: '15',
    className: 'fried-chicken',
    title: '炸雞',
    tag: '炸雞'
  }, {
    id: '16',
    className: 'rice-bowl',
    title: '家常菜',
    tag: '家常菜'
  }, {
    id: '17',
    className: 'lettuce',
    title: '素食',
    tag: '素食'
  }, {
    id: '18',
    className: 'skewer',
    title: '串燒',
    tag: '串燒'
  }, {
    id: '19',
    className: 'baking',
    title: 'DIY',
    tag: 'DIY'
  }, {
    id: '20',
    className: 'spaguetti',
    title: '義大利麵',
    tag: '義式料理'
  }, {
    id: '21',
    className: 'pot',
    title: '火鍋',
    tag: '火鍋'
  }, {
    id: '22',
    className: 'doll',
    title: '主題特色',
    tag: '主題特色'
  }, {
    id: '23',
    className: 'coupon',
    title: '優惠',
    tag: '優惠'
  }, {
    id: '24',
    className: 'sprout',
    title: '季節限定',
    tag: '季節限定'
  }, {
    id: '25',
    className: 'food-truck',
    title: '餐車',
    tag: '餐車'
  }, {
    id: '26',
    className: 'champagne',
    title: '慶賀',
    tag: '慶賀'
  }, {
    id: '27',
    className: 'baby-boy',
    title: '親子友善',
    tag: '親子友善'
  }, {
    id: '28',
    className: 'pets',
    title: '寵物友善',
    tag: '寵物友善'
  }, {
    id: '29',
    className: 'man-in-a-party-dancing-with-people',
    title: '多人',
    tag: '多人'
  }, {
    id: '996',
    className: 'movie',
    title: '桌邊服務',
    tag: '桌邊服務'
  }, {
    id: '997',
    className: 'review',
    title: '特別推薦',
    tag: '特別推薦'
  }, {
    id: '998',
    className: 'baker',
    title: '無菜單',
    tag: '無菜單'
  }, {
    id: '999',
    className: 'delivery',
    title: '外送',
    tag: '外送'
  }],
  hotTopics: [{
    id: '209b9815-911e-42c0-a501-6757d8c63c62',
    title: '一個人要吃什麼好？',
    link: '/tag?keyword=一個人'
  }, {
    id: '96997512-6b97-4a5e-95cd-c7d588354a0a',
    title: '台北最適合約會的餐廳',
    link: '/tag?keyword=情人節大餐'
  }, {
    id: '696cedc7-c4ea-4671-9c53-28897f3acb62',
    title: '怎麼吃才會瘦？秘訣在這裡',
    link: '/tag?keyword=瘦身'
  }, {
    id: 'f7062e18-79f6-45b8-bb2b-9b883e347b15',
    title: '遛小孩的好去處！',
    link: '/tag?keyword=親子友善'
  }, {
    id: '69a62d6f-d62e-41be-8bf5-089895c41dba',
    title: '不限時！和朋友歡聚暢聊不設限',
    link: '/tag?keyword=不限時'
  }, {
    id: 'f70efa1f-df85-4f2b-83ee-24aeb3948396',
    title: '最適合工作的咖啡廳清單',
    link: '/tag?keyword=工作'
  }, {
    id: '0ed42a1a-e55b-47c8-a939-ba81d381eaf4',
    title: '想找個地方開會？會議室出租',
    link: '/tag?keyword=會議室'
  }, {
    id: 'e73418b4-b0f7-43bb-8381-355f2269900e',
    title: '寶可夢補給站！休息，充電和 Wifi',
    link: '/tag?keyword=寶可夢'
  }, {
    id: 'bbd01354-88a2-4930-849e-66bf75c2d978',
    title: '超值會員卡大集合，辦了絕對不後悔',
    link: '/tag?keyword=會員卡'
  }, {
    id: '0b664a52-fb2c-42e2-8e73-13e592ef6091',
    title: '無限漫畫看到飽',
    link: '/tag?keyword=漫畫'
  }, {
    id: 'd91b94a8-7ff7-4377-b49b-1d9db14b51b4',
    title: '一起看足球賽，超大電視螢幕、啤酒',
    link: '/tag?keyword=足球'
  }, {
    id: '056bfcdb-4b5c-4845-89b2-abfb0159cb2b',
    title: '你也可以當網紅！來這裡拍照打卡',
    link: '/tag?keyword=網紅'
  }]
};
/* harmony default export */ __webpack_exports__["a"] = (data);

/***/ }),

/***/ "./data/locale_tw.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return common; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return icon; });
var common = {
  title: '吃什麼，どっち'
};
var icon = {
  onlineBooking: '線上訂位',
  phoneBooking: '電話訂位',
  navigation: '導航',
  address: '地址',
  phone: '電話',
  openingHour: '營業時間',
  price: '價格',
  website: '網站',
  hot: '熱門'
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_no_ssr__ = __webpack_require__("react-no-ssr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_no_ssr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_no_ssr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_card__ = __webpack_require__("./components/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_index__ = __webpack_require__("./actions/index.js");
var _jsxFileName = "/Users/Cythilya/Documents/git/dotch_food_v2/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var renderCards = function renderCards(stores) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(stores, function (store) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_card__["a" /* default */], {
      key: store.id,
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    });
  });
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_index__["b" /* fetchNearbyStoreList */])());
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_index__["c" /* fetchRecommendStoreList */])());
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_8__actions_index__["a" /* fetchHotStoreList */])());
    }
  }, {
    key: "render",
    value: function render() {
      var _props$filteredStores = this.props.filteredStores,
          nearbyStoresData = _props$filteredStores.nearbyStoresData,
          recommendStoresData = _props$filteredStores.recommendStoresData,
          hotStoresData = _props$filteredStores.hotStoresData;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_page__["a" /* default */], {
        title: "\u9996\u9801",
        id: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "panel__main-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "\u96E2\u6211\u6700\u8FD1", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "panel__heading-deco icon-pin-map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/nearby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "panel__view-more",
        title: "\u770B\u66F4\u591A-\u96E2\u6211\u6700\u8FD1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "\u770B\u66F4\u591A")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_no_ssr___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "card-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, renderCards(nearbyStoresData)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "panel__main-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "\u731C\u4F60\u60F3\u5403"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/nearby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "panel__view-more",
        title: "\u770B\u66F4\u591A-\u731C\u4F60\u60F3\u5403",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "\u770B\u66F4\u591A")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_no_ssr___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "card-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, renderCards(recommendStoresData)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "panel__main-heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "\u71B1\u9580\u63A8\u85A6", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "panel__heading-deco icon-star",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
        href: "/nearby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "panel__view-more",
        title: "\u770B\u66F4\u591A-\u71B1\u9580\u63A8\u85A6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "\u770B\u66F4\u591A")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_no_ssr___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "card-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, renderCards(hotStoresData)))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Index.propTypes = {
  nearbyStoresData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
  recommendStoresData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array,
  hotStoresData: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array
};
Index.defaultProps = {
  nearbyStoresData: [],
  recommendStoresData: [],
  hotStoresData: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return state;
})(Index));

/***/ }),

/***/ "./style/components/card.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/components/footer.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/components/header.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/components/store_control_button.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/components/tag_list.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/index.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazyload":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-newsticker":
/***/ (function(module, exports) {

module.exports = require("react-newsticker");

/***/ }),

/***/ "react-no-ssr":
/***/ (function(module, exports) {

module.exports = require("react-no-ssr");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map