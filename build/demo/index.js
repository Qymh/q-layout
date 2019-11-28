import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default {
  input: 'demo/index.js',
  output: {
    file: 'demoDist/bundle.js',
    name: 'demo',
    format: 'umd'
  },
  plugins: [
    vue(),
    typescript(),
    postcss({
      extract: true,
      extensions: ['.css', '.scss']
    }),
    commonjs(),
    resolve({
      mainFields: ['main', 'browser']
    })
  ]
};
