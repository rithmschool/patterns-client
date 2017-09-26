import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';
import SidebarLeft from '../components/SidebarLeft';
import Content from '../components/Content';

describe('<MainContainer />', () => {
  const wrapper = shallow(<MainContainer />);

  it('should render main div ', () => {
    expect(wrapper.find('.main')).toHaveLength(1);
  });

  it('should render SidebarLeft component ', () => {
    expect(wrapper.find(SidebarLeft)).toHaveLength(1);
  });

  it('should render Content component ', () => {
    expect(wrapper.find(Content)).toHaveLength(1);
  });
});
