import { createLocalVue, mount } from '@vue/test-utils';
import QLayout from '../src/index';

const localVue = createLocalVue();
localVue.use(QLayout);

export function rgb(color: string) {
  if (!/rgb/.test(color)) {
    return color;
  }
  var rgb = color.split(',');
  var r = parseInt(rgb[0].split('(')[1]);
  var g = parseInt(rgb[1]);
  var b = parseInt(rgb[2].split(')')[0]);
  var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

export function cm(template: string) {
  const wrapper = mount(
    {
      template: template
    },
    {
      localVue
    }
  );
  return wrapper;
}
