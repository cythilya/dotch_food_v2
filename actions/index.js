import _ from 'lodash';
import {
  FETCH_STORE_LIST,
  FETCH_STORE_LIST_BY_TAG,
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_HOT_STORE_LIST,
  FETCH_SLIDES_DATA,
  SAVE_STORE_DATA,
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
  };

  // console.log(data);

  return {
    type: SAVE_STORE_DATA,
    // payload: firebase.firestore().collection('stores').add(data),
    payload: firebase.firestore().collection('test').add(data),
    // payload: firebase.firestore().collection('test').add('123'),
  };
}
