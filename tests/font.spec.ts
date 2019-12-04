import { cm } from './utils';

describe('font', () => {
  it('fontSize', () => {
    const wrapper = cm('<q-row fontSize="24"></q-row>');
    expect(wrapper.element.style.fontSize).toBe('24.000px');
  });

  describe('weight', () => {
    it('string', () => {
      const wrapper = cm('<q-row weight="bold"></q-row>');
      expect(wrapper.element.style.fontWeight).toBe('bold');
    });

    it('number', () => {
      const wrapper = cm('<q-row :weight="500"></q-row>');
      expect(wrapper.element.style.fontWeight).toBe('500');
    });
  });
});
