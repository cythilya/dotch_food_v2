import {
  FETCH_STORE_LIST,
  FETCH_STORE_LIST_BY_TAG,
  FETCH_SLIDES_DATA,
} from '../constants';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyC_xPAyKYsvuIuT6mceI_8gow7H3cSo3BI',
  authDomain: 'dotch-food.firebaseapp.com',
  projectId: 'dotch-food',
});

export function fetchStoreList() {
  return {
    type: FETCH_STORE_LIST,
    payload: firebase.firestore().collection('stores').get(),
  };
}

export function fetchStoreListByTag(tag) {
  return {
    type: FETCH_STORE_LIST_BY_TAG,
    payload: firebase.firestore().collection('stores').where(`tags.${tag}`, '==', true).get(),
  };
}

export function fetchSlidesData() {
  return {
    type: FETCH_SLIDES_DATA,
    payload: firebase.firestore().collection('slideshows').get(),
  };
}
