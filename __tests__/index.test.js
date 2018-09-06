import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index';

describe('With Enzyme', () => {
  it('title: 吃什麼，どっち', () => {
    const app = shallow(<App />);
    expect(app.find('.header__title').text()).toEqual('吃什麼，どっち');
  });
});

// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
