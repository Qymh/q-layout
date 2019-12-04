import { cm } from './utils';

describe('padding', () => {
  describe('pt', () => {
    it('string', () => {
      const wrapper = cm('<q-row pt="10"></q-row>');
      expect(wrapper.element.style.paddingTop).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :pt="10"></q-row>');
      expect(wrapper.element.style.paddingTop).toBe('10%');
    });
  });

  describe('pr', () => {
    it('string', () => {
      const wrapper = cm('<q-row pr="10"></q-row>');
      expect(wrapper.element.style.paddingRight).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :pr="10"></q-row>');
      expect(wrapper.element.style.paddingRight).toBe('10%');
    });
  });

  describe('pb', () => {
    it('string', () => {
      const wrapper = cm('<q-row pb="10"></q-row>');
      expect(wrapper.element.style.paddingBottom).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :pb="10"></q-row>');
      expect(wrapper.element.style.paddingBottom).toBe('10%');
    });
  });

  describe('pl', () => {
    it('string', () => {
      const wrapper = cm('<q-row pl="10"></q-row>');
      expect(wrapper.element.style.paddingLeft).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :pl="10"></q-row>');
      expect(wrapper.element.style.paddingLeft).toBe('10%');
    });
  });

  describe('padding', () => {
    it('string', () => {
      const wrapper = cm('<q-row padding="10 11 12 13"></q-row>');
      expect(wrapper.element.style.padding).toBe(
        '10.000px 11.000px 12.000px 13.000px'
      );
    });

    it('percent', () => {
      const wrapper = cm('<q-row padding="10% 11% 12% 13%"></q-row>');
      expect(wrapper.element.style.padding).toBe('10% 11% 12% 13%');
    });
  });
});
