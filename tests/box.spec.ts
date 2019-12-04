import { cm } from './utils';

describe('box', () => {
  it('overflow', () => {
    const wrapper = cm('<q-row overflow="auto"></q-row>');
    expect(wrapper.element.style.overflow).toBe('auto');
  });

  it('overflowX', () => {
    const wrapper = cm('<q-row overflowX="auto"></q-row>');
    expect(wrapper.element.style.overflowX).toBe('auto');
  });

  it('overflowY', () => {
    const wrapper = cm('<q-row overflowY="auto"></q-row>');
    expect(wrapper.element.style.overflowY).toBe('auto');
  });
});
