import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import renderer from 'react-test-renderer';
import logo from '../images/logo-light-gray.png';

describe('<Login />', () => {
  const wrapper = shallow(<Login />);

  it('should render a login image', () => {
    expect(wrapper.find('.login-image')).toHaveLength(1);
  });
});
