import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav';
import Header from './Header';
import InnerContent from './InnerContent';
import Content from './Content';

describe('<Content />', () => {
  const wrapper = shallow(<Content />);

  it('should render one TopNav Component ', () => {
    expect(wrapper.find(TopNav)).toHaveLength(1);
  });

  it('should render one Header Component ', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render one InnerContent Component ', () => {
    expect(wrapper.find(InnerContent)).toHaveLength(1);
  });
});
