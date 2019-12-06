/* eslint-disable no-console */
import { createLocalVue, mount } from '@vue/test-utils';
import QLayout from '../src/index';
console.error = jest.fn();
console.warn = jest.fn();
beforeEach(() => {
  (console.error as any).mockClear();
  (console.warn as any).mockClear();
});

describe('index', () => {
  it('config is not an object', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, []);
    mount(
      {
        template: '<q-row></q-row>'
      },
      {
        localVue
      }
    );
    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it('wrong keys in config', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, {
      wrong: 1
    });
    mount(
      {
        template: '<q-row></q-row>'
      },
      {
        localVue
      }
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('wrong keys in collections', () => {
    const localVue = createLocalVue();
    localVue.use(QLayout, {
      collections: {
        h: {
          wrong: 1
        }
      }
    });
    mount(
      {
        template: '<q-row></q-row>'
      },
      {
        localVue
      }
    );
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
