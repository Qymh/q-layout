import { cm } from './utils';

describe('dimension', () => {
  describe('h', () => {
    it('string', () => {
      const wrapper = cm('<q-row h="100"></q-row>');
      expect(wrapper.element.style.height).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :h="50"></q-row>');
      expect(wrapper.element.style.height).toBe('50%');
    });
  });

  describe('maxh', () => {
    it('string', () => {
      const wrapper = cm('<q-row maxh="100"></q-row>');
      expect(wrapper.element.style.maxHeight).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :maxh="50"></q-row>');
      expect(wrapper.element.style.maxHeight).toBe('50%');
    });
  });

  describe('minh', () => {
    it('string', () => {
      const wrapper = cm('<q-row minh="100"></q-row>');
      expect(wrapper.element.style.minHeight).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :minh="50"></q-row>');
      expect(wrapper.element.style.minHeight).toBe('50%');
    });
  });

  describe('w', () => {
    it('string', () => {
      const wrapper = cm('<q-row w="100"></q-row>');
      expect(wrapper.element.style.width).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :w="50"></q-row>');
      expect(wrapper.element.style.width).toBe('50%');
    });
  });

  describe('minw', () => {
    it('string', () => {
      const wrapper = cm('<q-row minw="100"></q-row>');
      expect(wrapper.element.style.minWidth).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :minw="50"></q-row>');
      expect(wrapper.element.style.minWidth).toBe('50%');
    });
  });

  describe('maxw', () => {
    it('string', () => {
      const wrapper = cm('<q-row maxw="100"></q-row>');
      expect(wrapper.element.style.maxWidth).toBe('100.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :maxw="50"></q-row>');
      expect(wrapper.element.style.maxWidth).toBe('50%');
    });
  });
});
