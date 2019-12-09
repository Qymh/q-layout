const rollup = require('rollup');
const postcss = require('rollup-plugin-postcss');
const typescript = require('rollup-plugin-typescript');
const vue = require('rollup-plugin-vue');
const fs = require('fs-extra');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const terser = require('terser');

const config = {
  es: {
    input: 'src/index.ts',
    output: {
      file: 'dist/q-layout.esm.js',
      format: 'es'
    }
  },
  commonjs: {
    input: 'src/index.ts',
    output: {
      file: 'dist/q-layout.common.js',
      format: 'cjs'
    }
  },
  umd: {
    input: 'src/index.ts',
    output: {
      file: 'dist/q-layout.js',
      minFile: 'dist/q-layout.min.js',
      cssFile: 'dist/q-layout.css',
      cssMinFile: 'dist/q-layout.min.css',
      format: 'umd',
      name: 'QLayout'
    }
  }
};

const rollupConfig = {
  plugins: [
    vue(),
    typescript(),
    commonjs(),
    postcss({
      extract: true,
      extensions: ['.css', '.scss']
    }),
    resolve({
      mainFields: ['main', 'browser']
    })
  ]
};

async function build() {
  for (const key in config) {
    const chunk = config[key];
    const configuration = {
      ...chunk,
      ...rollupConfig
    };
    if (key !== 'umd') {
      configuration.external = ['vue', '@vue/composition-api'];
    }
    await rollup
      .rollup(configuration)
      .then(bundle => {
        return bundle.generate(chunk.output);
      })
      .then(output => {
        const js = output.output[0].code;
        const css = output.output[1].source.toString();
        fs.outputFileSync(chunk.output.file, js);
        if (key === 'umd') {
          const minified = terser.minify(js, {
            toplevel: true,
            output: {
              ascii_only: true
            },
            compress: {
              pure_funcs: ['makeMap']
            }
          }).code;
          fs.outputFileSync(chunk.output.minFile, minified);
          fs.outputFileSync(chunk.output.cssFile, css);
        }
      });
  }
}

build();
