import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import base from './index';

base.plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  serve({
    contentBase: ['demoDist'],
    port: 10002
  }),
  livereload(),
  htmlTemplate({
    template: 'demo/index.html',
    target: 'index.html'
  })
);

export default base;
