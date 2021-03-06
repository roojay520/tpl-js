import path from 'path';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.jsx'];
const output = [
  {
    format: 'cjs',
    exports: 'auto',
    file: path.resolve(__dirname, './dist/index-cjs.js'),
  },
  {
    format: 'es',
    exports: 'auto',
    file: path.resolve(__dirname, './dist/index-es.js'),
  },
  {
    format: 'umd',
    name: 'index',
    exports: 'auto',
    file: path.resolve(__dirname, './dist/index-umd.js'),
  },
];

const plugins = [
  copy({ targets: [{ src: './types', dest: 'dist/types/' }] }),
  json({ namedExports: false }),
  resolve({ extensions, modulesOnly: true }),
  commonjs(),
  nodePolyfills(),
  babel({
    extensions,
    include: './src/**',
    babelHelpers: 'bundled',
    exclude: ['node_modules/**', './types/**'],
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser());
}

export default {
  // 将 lodash 作为外部依赖
  // external: (id) => /lodash/.test(id),
  input: path.resolve(__dirname, './src/index.js'),
  output,
  plugins,
};
