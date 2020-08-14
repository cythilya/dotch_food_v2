import _ from 'lodash';
import {
  ADD_FAV_LIST,
  DOTCH_FOOD_COOKIE_KEY,
  FETCH_FAV_LIST,
  FETCH_HOT_STORE_LIST,
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_SLIDES_DATA,
  FETCH_STORE_COMMENTS,
  FETCH_STORE_INFO,
  FETCH_STORE_LIST_BY_TAG,
  FETCH_STORE_LIST,
  INSERT_FAV_LIST,
  INSERT_STORE_COMMENT,
  LOGIN,
  LOGOUT,
  RESTORE_USER_INFO,
  SAVE_STORE_COMMENT,
  SAVE_STORE_DATA,
} from '../constants';
import { DEFAULT_IMAGE } from '../constants/common';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
} from '../constants/config';

const uuidv1 = require('uuid/v1');

const firebase = require('firebase');
require('firebase/firestore');

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
  });
}

export const fetchStoreList = () => {
  return {
    type: FETCH_STORE_LIST,
    payload: firebase.firestore().collection('stores').orderBy('id').get(),
  };
}

export const fetchStoreListByTag = (tag) => {
  return {
    type: FETCH_STORE_LIST_BY_TAG,
    payload: firebase.firestore().collection('stores').where(`tags.${tag}`, '==', true).get(),
  };
}

export const fetchNearbyStoreList = () => {
  return {
    type: FETCH_NEARBY_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('nearby', '==', true).limit(4).get(),
  };
}

export const fetchRecommendStoreList = () => {
  return {
    type: FETCH_RECOMMEND_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('recommend', '==', true).limit(4).get(),
  };
}

export const fetchHotStoreList = () => {
  return {
    type: FETCH_HOT_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('hot', '==', true).limit(4).get(),
  };
}

export const fetchFavList = (userID) => {
  return {
    type: FETCH_FAV_LIST,
    payload: firebase.firestore().collection('favlist').where('id', '==', userID).limit(20).get(),
  };
}

export const insertFavList = ({ userID, store }) => {
  return {
    type: INSERT_FAV_LIST,
    payload: firebase.firestore().collection('favlist').doc(userID).set({
      list: [store],
    }),
  };
}

export const addFavList = ({ userID, store }) => {
  return {
    type: ADD_FAV_LIST,
    payload: firebase.firestore().collection('favlist').doc(userID).update({
      list: firebase.firestore.FieldValue.arrayUnion(store),
    }),
  };
}

export const fetchStoreInfo = (id) => {
  return {
    type: FETCH_STORE_INFO,
    payload: firebase.firestore().collection('stores').where('id', '==', id).limit(1).get(),
  };
}

export const fetchSlidesData = () => {
  return {
    type: FETCH_SLIDES_DATA,
    payload: firebase.firestore().collection('slideshows').orderBy('id').get(),
  };
}

export const saveStoreData = (formData) => {
  const imageName = formData.image || DEFAULT_IMAGE;
  const bookingPhone = formData.isBookingPhone ? formData.phone : null;
  const tagArray = formData.tags ? formData.tags.split(' ') : [];
  let tagList = {};
  let featureList = {};

  if (tagArray.length) {
    _.each(tagArray, (item) => {
      const obj = {};
      obj[item] = true;
      tagList = Object.assign(tagList, obj);
    });
  } else {
    tagList = {
      測試: true,
    };
  }

  if (formData.twentyfourhr) {
    const feature = {};
    feature.twentyfourhr = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['24 小時營業'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.mrt) {
    const feature = {};
    feature.mrt = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['捷運沿線'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.noTimeLimit) {
    const feature = {};
    feature.noTimeLimit = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['不限時'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.parking) {
    const feature = {};
    feature.parking = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['停車位'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.socket) {
    const feature = {};
    feature.socket = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['提供插座'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.takeout) {
    const feature = {};
    feature.takeout = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['外帶'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.wifi) {
    const feature = {};
    feature.wifi = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['wifi'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.cashOnly) {
    const feature = {};
    feature.cashOnly = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['只接受現金'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.customService) {
    const feature = {};
    feature.customService = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['客製化服務'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.family) {
    const feature = {};
    feature.family = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['親子友善'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.pet) {
    const feature = {};
    feature.pet = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['寵物友善'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.pokemon) {
    const feature = {};
    feature.pokemon = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['寶可夢'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.sushi) {
    const obj = {};
    obj['壽司'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.brunch) {
    const obj = {};
    obj['早午餐'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.barbecue) {
    const obj = {};
    obj['燒烤'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.burger) {
    const obj = {};
    obj['漢堡'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.salad) {
    const obj = {};
    obj['輕食'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.steak) {
    const obj = {};
    obj['牛排'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.cake) {
    const obj = {};
    obj['甜點'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.dimsum) {
    const obj = {};
    obj['港式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.lowprice) {
    const obj = {};
    obj['平價'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.beer) {
    const obj = {};
    obj['居酒屋'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.coffee) {
    const obj = {};
    obj['咖啡'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.thaifood) {
    const obj = {};
    obj['泰國菜'] = true;
    tagList = Object.assign(tagList, obj);

    const obj1 = {};
    obj1['泰式料理'] = true;
    tagList = Object.assign(tagList, obj1);
  }

  if (formData.tea) {
    const obj = {};
    obj['茶'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.crab) {
    const obj = {};
    obj['海鮮'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.friedchicken) {
    const obj = {};
    obj['炸雞'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.americanfood) {
    const obj = {};
    obj['美式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.rice) {
    const obj = {};
    obj['家常菜'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.lettuce) {
    const obj = {};
    obj['素食'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.skewer) {
    const obj = {};
    obj['串燒'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.baking) {
    const obj = {};
    obj['DIY'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.spaguetti) {
    const obj = {};
    obj['義大利麵'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.pot) {
    const obj = {};
    obj['火鍋'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.doll) {
    const obj = {};
    obj['主題特色'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.foodtruck) {
    const obj = {};
    obj['小販餐車'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.superheroe) {
    const obj = {};
    obj['漫畫雜誌'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.socialmedia) {
    const obj = {};
    obj['拍照打卡'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.sofa) {
    const obj = {};
    obj['沙發'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.movie) {
    const obj = {};
    obj['桌邊服務'] = true;
    tagList = Object.assign(tagList, obj);
  }
  if (formData.review) {
    const obj = {};
    obj['特別推薦'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.baker) {
    const obj = {};
    obj['無菜單'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.delivery) {
    const obj = {};
    obj['外送'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.ricebowl) {
    const obj = {};
    obj['中式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.japanesefood) {
    const obj = {};
    obj['日式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.sashimi) {
    const obj = {};
    obj['韓式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.italianfood) {
    const obj = {};
    obj['義式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.croissant) {
    const obj = {};
    obj['法式料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.curry) {
    const obj = {};
    obj['印度料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.merlion) {
    const obj = {};
    obj['星馬南洋料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.wok) {
    const obj = {};
    obj['異國料理'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.buffet) {
    const obj = {};
    obj['吃到飽'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.tray) {
    const obj = {};
    obj['鐵板燒'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.cafe) {
    const obj = {};
    obj['複合餐飲'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.selfservice) {
    const obj = {};
    obj['自助餐'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.lunchbox) {
    const obj = {};
    obj['便當'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.popcorn) {
    const obj = {};
    obj['速食'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.dessert) {
    const obj = {};
    obj['下午茶'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.beerbar) {
    const obj = {};
    obj['酒吧'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.noodles) {
    const obj = {};
    obj['小吃'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.instant) {
    const obj = {};
    obj['調理包'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.network) {
    const obj = {};
    obj['網咖'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.drink) {
    const obj = {};
    obj['咖啡茶飲'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.toast) {
    const obj = {};
    obj['烘焙糕點'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.other) {
    const obj = {};
    obj['其他'] = true;
    tagList = Object.assign(tagList, obj);
  }

  const data = {
    id: uuidv1(),
    name: formData.name || '測試',
    description: formData.description || null,
    image: [
      // original
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/${imageName}.png`,
      },
      // 177 jpg
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_177,fl_progressive/${imageName}.jpg`,
      },
      // 354 jpg
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_354,fl_progressive/${imageName}.jpg`,
      },
      // 531 jpg
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_531,fl_progressive/${imageName}.jpg`,
      },
      // 708 jpg
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_708,fl_progressive/${imageName}.jpg`,
      },
      // 177 webp
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_177,fl_progressive/${imageName}.webp`,
      },
      // 354 webp
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_354,fl_progressive/${imageName}.webp`,
      },
      // 531 webp
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_531,fl_progressive/${imageName}.webp`,
      },
      // 708 webp
      {
        url: `https://res.cloudinary.com/dfgridmvn/image/upload/c_scale,w_708,fl_progressive/${imageName}.webp`,
      },
    ],
    phone: formData.phone || null,
    location: {
      address: formData.address || null,
      zip: formData.zip || null,
      coordinates: null,
    },
    openingHour: {
      start: formData.start || '0 AM',
      end: formData.end || '0 PM',
    },
    price: {
      lowest: formData.lowest || 0,
      highest: formData.highest || 999999,
    },
    booking: {
      online: formData.bookingOnline || null,
      phone: bookingPhone,
    },
    sns: {
      facebook: formData.facebook || null,
      website: formData.website || null,
    },
    hot: false,
    nearby: false,
    recommend: false,
    tags: tagList,
    features: featureList,
  };

  return {
    type: SAVE_STORE_DATA,
    // payload: firebase.firestore().collection('stores').add(data),
    payload: firebase.firestore().collection('test').add(data),
    // payload: firebase.firestore().collection('test').add('123'),
  };
}

export const fetchStoreComments = (id) => {
  return {
    type: FETCH_STORE_COMMENTS,
    payload: firebase.firestore().collection('comments').where('id', '==', id).limit(5)
      .get(),
  };
}

export const saveCommentData = (formData) => {
  const {
    docid, user, rating, meal, date, content,
  } = formData;
  const data = {
    user, rating, meal, date, content,
  };

  return {
    type: SAVE_STORE_COMMENT,
    payload: firebase.firestore().collection('comments').doc(docid).update({
      comments: firebase.firestore.FieldValue.arrayUnion(data),
    }),
  };
}

export const insertCommentData = (formData) => {
  const {
    id, user, rating, meal, date, content,
  } = formData;

  return {
    type: INSERT_STORE_COMMENT,
    payload: firebase.firestore().collection('comments').add({
      id,
      comments: [
        {
          user, rating, meal, date, content,
        },
      ],
    }),
  };
}

export const login = (account, password, loginCallback) => {
  return {
    type: LOGIN,
    payload: firebase.firestore().collection('users').where('id', '==', account).get()
    .then(function(res) {
      let userInfo = [];

      _.forEach(res.docs, (doc) => {
        userInfo.push(doc.data());
      });

      if (userInfo[0].password === password) {
        loginCallback();
        return { isLogin: true, userInfo: userInfo[0]};
      } else {
        return { isLogin: false, userInfo: null };
      }
    })
    .catch(function(error) {
      console.error('Error occurred: ', error);
    })
  };
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const restoreUserInfo = (userInfo) => {
  return {
    type: RESTORE_USER_INFO,
    payload: userInfo,
  }
}
