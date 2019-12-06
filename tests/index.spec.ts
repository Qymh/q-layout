import { createLocalVue, mount } from '@vue/test-utils';
import QLayout from '../src/index';

describe('index', () => {
  it('alias', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, {
      collections: {
        h: {
          alias: 'height'
        }
      }
    });

    const wrapper1 = mount(
      {
        template: '<q-row height="10"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper1.element.style.height).toBe('10.000px');

    const wrapper2 = mount(
      {
        template: '<q-row h="10"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper2.element.style.height).toBe('10.000px');
  });

  it('coverage', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, {
      collections: {
        h: {
          coverage: 'height'
        }
      }
    });

    const wrapper1 = mount(
      {
        template: '<q-row height="10"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper1.element.style.height).toBe('10.000px');

    const wrapper2 = mount(
      {
        template: '<q-row h="10"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper2.element.style.height).toBe('');
  });

  it('diy', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, {
      collections: {
        family: {
          raw: 'fontFamily',
          type: String,
          default: '',
          pure: true
        }
      }
    });

    const wrapper1 = mount(
      {
        template: '<q-row family="monospace" tag="span"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper1.element.tagName.toLocaleLowerCase()).toBe('span');
    expect(wrapper1.element.style.fontFamily).toBe('monospace');
  });

  it('unit', () => {
    const localVue: any = createLocalVue();
    localVue._installedPlugins = [];
    localVue.use(QLayout, {
      unit: 'vw',
      ratio: '35'
    });

    const wrapper1 = mount(
      {
        template: '<q-row height="100"></q-row>'
      },
      {
        localVue
      }
    );
    expect(wrapper1.element.style.height).toBe('2.857vw');
  });
});
