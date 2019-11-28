import { createComponent, ref } from '@vue/composition-api';
import { generateProps, mergePropsFn } from './props';

const QRow = () =>
  createComponent({
    props: mergePropsFn(),
    setup(props) {
      const generatedProps = generateProps(props);
      const style = ref(generatedProps.style);
      const className = ref(generatedProps.className);
      return {
        style,
        className
      };
    },
    render(this: any, h) {
      return h(
        this.tag || 'div',
        { style: this.style, class: this.className },
        this.$slots.default
      );
    }
  });

export default QRow;
