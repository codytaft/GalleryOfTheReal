import { mount } from 'vue-test-utils';
import ImageContainer from './ImageContainer';

describe('ImageContainer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageContainer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
