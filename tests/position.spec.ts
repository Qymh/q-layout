import { cm } from './utils';

describe('position', () => {
  describe('t', () => {
    it('string', () => {
      const wrapper = cm('<q-row t="10"></q-row>');
      expect(wrapper.element.style.top).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :t="10"></q-row>');
      expect(wrapper.element.style.top).toBe('10%');
    });
  });

  describe('r', () => {
    it('string', () => {
      const wrapper = cm('<q-row r="10"></q-row>');
      expect(wrapper.element.style.right).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :r="10"></q-row>');
      expect(wrapper.element.style.right).toBe('10%');
    });
  });

  describe('b', () => {
    it('string', () => {
      const wrapper = cm('<q-row b="10"></q-row>');
      expect(wrapper.element.style.bottom).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :b="10"></q-row>');
      expect(wrapper.element.style.bottom).toBe('10%');
    });
  });

  describe('l', () => {
    it('string', () => {
      const wrapper = cm('<q-row l="10"></q-row>');
      expect(wrapper.element.style.left).toBe('10.000px');
    });

    it('number', () => {
      const wrapper = cm('<q-row :l="10"></q-row>');
      expect(wrapper.element.style.left).toBe('10%');
    });
  });

  it('position', () => {
    const wrapper = cm('<q-row position="fixed"></q-row>');
    expect(wrapper.element.style.position).toBe('fixed');
  });

  it('display', () => {
    const wrapper = cm('<q-row display="inline-block"></q-row>');
    expect(wrapper.element.style.display).toBe('inline-block');
  });

  it('float', () => {
    const wrapper = cm('<q-row float="left"></q-row>');
    expect(wrapper.element.style.cssFloat).toBe('left');
  });

  it('cursor', () => {
    const wrapper = cm('<q-row cursor="pointer"></q-row>');
    expect(wrapper.element.style.cursor).toBe('pointer');
  });

  it('va', () => {
    const wrapper = cm('<q-row va="middle"></q-row>');
    expect(wrapper.element.style.verticalAlign).toBe('middle');
  });

  describe('zIndex', () => {
    it('string', () => {
      const wrapper = cm('<q-row zIndex="10"></q-row>');
      expect(wrapper.element.style.zIndex).toBe('10');
    });

    it('number', () => {
      const wrapper = cm('<q-row :zIndex="10"></q-row>');
      expect(wrapper.element.style.zIndex).toBe('10');
    });
  });

  it('visibility', () => {
    const wrapper = cm('<q-row visibility="hidden"></q-row>');
    expect(wrapper.element.style.visibility).toBe('hidden');
  });
});
