import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import JobDetail from './';

const mountWithStore = state => element => {
  const store = createStore(x => x, state || {});
  return mount(<Provider store={store}>{element}</Provider>);
};

const mountJobDetail = (state, props) => {
  const wrapper = mountWithStore(state)(<JobDetail {...props} />);
  return wrapper.find('JobDetail');
};

describe('components/JobDetail', () => {
  it('should render default', () => {
    const state = {id:1,title:'title 1',description:'description 1'};    
    const component = mountJobDetail(state, null);

    expect(component.find('JobDetail').length).toBe(1);
  });
});