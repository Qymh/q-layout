import { cm } from './utils';

describe('margin', () => {
  describe('mt', () => {
    it('string', () => {
      const wrapper = cm('<q-row mt="10"></q-row>');
      expect(wrapper.element.style.marginTop).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :mt="10"></q-row>');
      expect(wrapper.element.style.marginTop).toBe('10%');
    });
  });

  describe('mr', () => {
    it('string', () => {
      const wrapper = cm('<q-row mr="10"></q-row>');
      expect(wrapper.element.style.marginRight).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :mr="10"></q-row>');
      expect(wrapper.element.style.marginRight).toBe('10%');
    });
  });

  describe('mb', () => {
    it('string', () => {
      const wrapper = cm('<q-row mb="10"></q-row>');
      expect(wrapper.element.style.marginBottom).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :mb="10"></q-row>');
      expect(wrapper.element.style.marginBottom).toBe('10%');
    });
  });

  describe('ml', () => {
    it('string', () => {
      const wrapper = cm('<q-row ml="10"></q-row>');
      expect(wrapper.element.style.marginLeft).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :ml="10"></q-row>');
      expect(wrapper.element.style.marginLeft).toBe('10%');
    });
  });

  describe('margin', () => {
    it('string', () => {
      const wrapper = cm('<q-row margin="10 11 12 13"></q-row>');
      expect(wrapper.element.style.margin).toBe(
        '10.000px 11.000px 12.000px 13.000px'
      );
    });

    it('percent', () => {
      const wrapper = cm('<q-row margin="10% 11% 12% 13%"></q-row>');
      expect(wrapper.element.style.margin).toBe('10% 11% 12% 13%');
    });
  });
});
