import { mount } from 'vue-test-utils';
import AppTitle from './AppTitle';

describe('AppTitle', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppTitle);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
