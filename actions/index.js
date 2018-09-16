import _ from 'lodash';
import {
  FETCH_STORE_LIST,
  FETCH_STORE_LIST_BY_TAG,
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_HOT_STORE_LIST,
  FETCH_SLIDES_DATA,
  SAVE_STORE_DATA,
  FETCH_STORE_INFO,
} from '../constants';

const uuidv1 = require('uuid/v1');

const firebase = require('firebase');
require('firebase/firestore');

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyC_xPAyKYsvuIuT6mceI_8gow7H3cSo3BI',
    authDomain: 'dotch-food.firebaseapp.com',
    projectId: 'dotch-food',
  });
}

export function fetchStoreList() {
  return {
    type: FETCH_STORE_LIST,
    payload: firebase.firestore().collection('stores').orderBy('id').get(),
  };
}

export function fetchStoreListByTag(tag) {
  return {
    type: FETCH_STORE_LIST_BY_TAG,
    payload: firebase.firestore().collection('stores').where(`tags.${tag}`, '==', true).get(),
  };
}

export function fetchNearbyStoreList() {
  return {
    type: FETCH_NEARBY_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('nearby', '==', true).limit(4).get(),
  };
}

export function fetchRecommendStoreList() {
  return {
    type: FETCH_RECOMMEND_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('recommend', '==', true).limit(4).get(),
  };
}

export function fetchHotStoreList() {
  return {
    type: FETCH_HOT_STORE_LIST,
    payload: firebase.firestore().collection('stores').where('hot', '==', true).limit(4).get(),
  };
}

export function fetchStoreInfo(id) {
  return {
    type: FETCH_STORE_INFO,
    payload: firebase.firestore().collection('stores').where('id', '==', id).limit(1).get(),
  };
}

export function fetchSlidesData() {
  return {
    type: FETCH_SLIDES_DATA,
    payload: firebase.firestore().collection('slideshows').orderBy('id').get(),
  };
}

export function saveStoreData(formData) {
  const imageName = formData.image || 'v1535796583/kitty-outline-512';
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
      '測試': true,
    };
  }


  if (formData.twentyfourhr) {
    const feature = {};
    feature['twentyfourhr'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['24 小時營業'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.mrt) {
    const feature = {};
    feature['mrt'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['捷運沿線'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.noTimeLimit) {
    const feature = {};
    feature['noTimeLimit'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['不限時'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.parking) {
    const feature = {};
    feature['parking'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['停車位'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.socket) {
    const feature = {};
    feature['socket'] = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['提供插座'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.takeout) {
    const feature = {};
    feature['takeout'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['外帶'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.wifi) {
    const feature = {};
    feature['wifi'] = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['wifi'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.cashOnly) {
    const feature = {};
    feature['cashOnly'] = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['只接受現金'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.customService) {
    const feature = {};
    feature['customService'] = true;
    featureList = Object.assign(featureList, feature);

    // const obj = {};
    // obj['客製化服務'] = true;
    // tagList = Object.assign(tagList, obj);
  }

  if (formData.family) {
    const feature = {};
    feature['family'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['親子友善'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.pet) {
    const feature = {};
    feature['pet'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['寵物友善'] = true;
    tagList = Object.assign(tagList, obj);
  }

  if (formData.pokemon) {
    const feature = {};
    feature['pokemon'] = true;
    featureList = Object.assign(featureList, feature);

    const obj = {};
    obj['寶可夢'] = true;
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

  // console.log(data);

  return {
    type: SAVE_STORE_DATA,
    // payload: firebase.firestore().collection('stores').add(data),
    payload: firebase.firestore().collection('test').add(data),
    // payload: firebase.firestore().collection('test').add('123'),
  };
}
