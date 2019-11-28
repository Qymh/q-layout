import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    name: 'QLayout',
    format: 'umd'
  },
  plugins: [
    typescript(),
    postcss({
      extract: true,
      extensions: ['.css']
    }),
    commonjs(),
    resolve({
      mainFields: ['main', 'browser']
    })
  ]
};
