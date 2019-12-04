import { rgb, cm } from './utils';

describe('text', () => {
  it('color', () => {
    const wrapper = cm('<q-row color="#fff"></q-row>');
    expect(rgb(wrapper.element.style.color!)).toBe('#ffffff');
  });

  describe('lh', () => {
    it('string', () => {
      const wrapper = cm('<q-row lh="10"></q-row>');
      expect(wrapper.element.style.lineHeight).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :lh="10"></q-row>');
      expect(wrapper.element.style.lineHeight).toBe('10%');
    });
  });

  it('letterSpacing', () => {
    const wrapper = cm('<q-row letterSpacing="2"></q-row>');
    expect(wrapper.element.style.letterSpacing).toBe('2.000px');
  });

  it('wordSpacing', () => {
    const wrapper = cm('<q-row wordSpacing="2"></q-row>');
    expect(wrapper.element.style.wordSpacing).toBe('2.000px');
  });

  it('whiteSpace', () => {
    const wrapper = cm('<q-row whiteSpace="nowrap"></q-row>');
    expect(wrapper.element.style.whiteSpace).toBe('nowrap');
  });

  describe('indent', () => {
    it('string', () => {
      const wrapper = cm('<q-row indent="10"></q-row>');
      expect(wrapper.element.style.textIndent).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :indent="10"></q-row>');
      expect(wrapper.element.style.textIndent).toBe('10%');
    });
  });
});
