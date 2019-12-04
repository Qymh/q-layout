import { cm } from './utils';

describe('color', () => {
  describe('opacity', () => {
    it('string', () => {
      const wrapper = cm('<q-row opacity="0.5"></q-row>');
      expect(wrapper.element.style.opacity).toBe('0.5');
    });

    it('number', () => {
      const wrapper = cm('<q-row :opacity="0.5"></q-row>');
      expect(wrapper.element.style.opacity).toBe('0.5');
    });
  });
});
