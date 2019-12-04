import { cm } from './utils';

describe('border', () => {
  describe('borderTop', () => {
    it('boolean', () => {
      const wrapper = cm('<q-row borderTop></q-row>');
      expect(
        wrapper.element.classList.contains('q-layout-borderTop')
      ).toBeTruthy();
    });

    it('string', () => {
      const wrapper = cm('<q-row borderTop="1px solid #666"></q-row>');
      expect(wrapper.element.style.borderTop).toBe('1px solid #666');
    });
  });

  describe('borderRight', () => {
    it('boolean', () => {
      const wrapper = cm('<q-row borderRight></q-row>');
      expect(
        wrapper.element.classList.contains('q-layout-borderRight')
      ).toBeTruthy();
    });

    it('string', () => {
      const wrapper = cm('<q-row borderRight="1px solid #666"></q-row>');
      expect(wrapper.element.style.borderRight).toBe('1px solid #666');
    });
  });

  describe('borderBottom', () => {
    it('boolean', () => {
      const wrapper = cm('<q-row borderBottom></q-row>');
      expect(
        wrapper.element.classList.contains('q-layout-borderBottom')
      ).toBeTruthy();
    });

    it('string', () => {
      const wrapper = cm('<q-row borderBottom="1px solid #666"></q-row>');
      expect(wrapper.element.style.borderBottom).toBe('1px solid #666');
    });
  });

  describe('borderLeft', () => {
    it('boolean', () => {
      const wrapper = cm('<q-row borderLeft></q-row>');
      expect(
        wrapper.element.classList.contains('q-layout-borderLeft')
      ).toBeTruthy();
    });

    it('string', () => {
      const wrapper = cm('<q-row borderLeft="1px solid #666"></q-row>');
      expect(wrapper.element.style.borderLeft).toBe('1px solid #666');
    });
  });

  describe('border', () => {
    it('boolean', () => {
      const wrapper = cm('<q-row border></q-row>');
      expect(
        wrapper.element.classList.contains('q-layout-border')
      ).toBeTruthy();
    });

    it('string', () => {
      const wrapper = cm('<q-row border="1px solid #666"></q-row>');
      expect(wrapper.element.style.border).toBe('1px solid #666');
    });
  });

  describe('radius', () => {
    it('number', () => {
      const wrapper = cm('<q-row :radius="50"></q-row>');
      expect(wrapper.element.style.borderRadius).toBe('50%');
    });

    it('string', () => {
      const wrapper = cm('<q-row radius="50"></q-row>');
      expect(wrapper.element.style.borderRadius).toBe('50.000px');
    });
  });
});
