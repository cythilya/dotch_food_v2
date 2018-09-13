import { shallow } from 'enzyme';
import React from 'react';

import Header from '../components/header';

describe('Test elements in header component do exist', () => {
  it('title: 吃什麼，どっち', () => {
    const app = shallow(<Header />);
    expect(app.find('.header__title').text()).toEqual('吃什麼，どっち');
  });
});
