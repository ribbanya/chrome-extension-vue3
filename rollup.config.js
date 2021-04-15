// rollup.config.js

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import vuePlugin from 'rollup-plugin-vue'

import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    typescript(),
    resolve(),
    commonjs(),
    vuePlugin({target: 'browser'})
  ],
}