import React from 'react';
import { shallow } from 'enzyme';
import InnerContent from './InnerContent';
import Content from './Content';

describe('<Content />', () =>{
  const wrapper = shallow(<Content />);

  it('should render InnerContent Component ', () => {
    expect(wrapper.find(InnerContent)).toHaveLength(1);
  })

})