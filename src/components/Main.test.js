import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';
import SidebarLeft from './SidebarLeft';
import Content from './Content';

describe('<Main />', () => {
  const wrapper = shallow(<Main />);

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
