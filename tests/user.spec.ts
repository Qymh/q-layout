import { cm } from './utils';

describe('user', () => {
  it('box', () => {
    const wrapper = cm('<q-row box="border-box"></q-row>');
    expect(wrapper.element.style.boxSizing).toBe('border-box');
  });
});
