import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'scripts/vetur.ts',
  output: {
    file: 'scripts/vetur.js',
    format: 'cjs'
  },
  plugins: [typescript(), commonjs()]
};
