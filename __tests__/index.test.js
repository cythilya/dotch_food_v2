import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../pages/index';

describe('Test page index is working or not...', () => {
  const initialState = {
    nearbyStoresData: [{
      id: '12345',
      name: 'ABCDE',
      image: [
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
      ],
      tags: {
        ABC: true,
      },
      booking: {
        phone: '02-12345678',
      },
      location: {
        address: 'ABCDEF',
      },
    }],
    recommendStoresData: [{
      id: '12345',
      name: 'ABCDE',
      image: [
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
      ],
      tags: {
        ABC: true,
      },
      booking: {
        phone: '02-12345678',
      },
      location: {
        address: 'ABCDEF',
      },
    }],
    hotStoresData: [{
      id: '12345',
      name: 'ABCDE',
      image: [
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
        { url: 'https://dummyimage.com/600x400/000/fff' },
      ],
      tags: {
        ABC: true,
      },
      booking: {
        phone: '02-12345678',
      },
      location: {
        address: 'ABCDEF',
      },
    }],
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const container = shallow(<App store={store} />);

  it('Test elements in header component do exist', () => {
    expect(container.length).toEqual(1);
  });
});

// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
