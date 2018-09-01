import {
  FETCH_STORE_LIST,
  FETCH_STORE_LIST_BY_TAG,
  FETCH_NEARBY_STORE_LIST,
  FETCH_RECOMMEND_STORE_LIST,
  FETCH_HOT_STORE_LIST,
  FETCH_SLIDES_DATA,
  SAVE_STORE_DATA,
} from '../constants';

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
  // managing form data here...
  const data = JSON.stringify(formData);
  console.log(`actions: ${data}`);
  return {
    type: SAVE_STORE_DATA,
    payload: firebase.firestore().collection('text').add(formData),
  };
}
