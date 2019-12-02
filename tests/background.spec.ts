import { rgb, cm } from './utils';

it('mount', () => {
  const wrapper = cm('<q-row></q-row>');
  expect(wrapper.vm).toBeDefined();
});

describe('background', () => {
  it('background', () => {
    const wrapper = cm('<q-row background="#fff bottom no-repeat"></q-row>');
    expect(wrapper.element.style.background).toBe(
      'rgb(255, 255, 255) no-repeat bottom'
    );
  });

  it('backgroundColor', () => {
    const wrapper = cm('<q-row bkColor="#fff"></q-row>');
    expect(rgb(wrapper.element.style.backgroundColor!)).toBe('#ffffff');
  });

  it('backgroundPosition', () => {
    const wrapper = cm('<q-row bkPosition="top bottom"></q-row>');
    expect(wrapper.element.style.backgroundPosition).toBe('top bottom');
  });

  it('backgroundRepeat', () => {
    const wrapper = cm('<q-row bkRepeat="no-repeat"></q-row>');
    expect(wrapper.element.style.backgroundRepeat).toBe('no-repeat');
  });

  it('backgroundSize', () => {
    const wrapper = cm('<q-row bkSize="100% 100%"></q-row>');
    expect(wrapper.element.style.backgroundSize).toBe('100% 100%');
  });
});
