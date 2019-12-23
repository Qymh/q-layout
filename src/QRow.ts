// eslint-disable-next-line no-unused-vars
import { Dictionary } from './types';
import { createComponent } from '@vue/composition-api';
import { generateProps, mergePropsFn } from './props';

const QRow = () =>
  createComponent({
    props: mergePropsFn(),
    render(this: any, h) {
      const { style, className } = generateProps(this._props);
      const attrs: Dictionary = {};
      if (style) {
        attrs.style = style;
      }
      if (className) {
        attrs.class = className;
      }
      return h(this.tag, attrs, this.$slots.default);
    }
  });

export default QRow;
