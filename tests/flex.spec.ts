import { cm } from './utils';

describe('flex', () => {
  it('dir', () => {
    const wrapper = cm('<q-row dir="top"></q-row>');
    expect(
      wrapper.element.classList.contains('q-layout-flexDirection-top')
    ).toBeTruthy();
  });

  it('justify', () => {
    const wrapper = cm('<q-row justify="center"></q-row>');
    expect(
      wrapper.element.classList.contains('q-layout-justifyContent-center')
    ).toBeTruthy();
  });

  it('align', () => {
    const wrapper = cm('<q-row align="center"></q-row>');
    expect(
      wrapper.element.classList.contains('q-layout-alignItems-center')
    ).toBeTruthy();
  });

  it('justify', () => {
    const wrapper = cm('<q-row justify="center"></q-row>');
    expect(
      wrapper.element.classList.contains('q-layout-justifyContent-center')
    ).toBeTruthy();
  });

  it('flex', () => {
    const wrapper = cm('<q-row flex="1"></q-row>');
    expect(wrapper.element.classList.contains('q-layout-flex-1')).toBeTruthy();
  });

  it('wrap', () => {
    const wrapper = cm('<q-row wrap="wrap"></q-row>');
    expect(
      wrapper.element.classList.contains('q-layout-flexWrap-wrap')
    ).toBeTruthy();
  });

  it('center', () => {
    const wrapper = cm('<q-row center></q-row>');
    expect(wrapper.element.classList.contains('q-layout-center')).toBeTruthy();
  });

  it('composition', () => {
    const wrapper = cm('<q-row align="center" justify="center"></q-row>');
    expect(wrapper.element.classList.contains('q-layout-flex')).toBeTruthy();
  });
});
