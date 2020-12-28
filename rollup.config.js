import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
const plugins =
  [
    del({ targets: 'lib/*' }),
    typescript({}),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    eslint({}),
    nodeResolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    json(),
    dts()
  ]
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'production') {
    plugins.push(terser())
} else {
  plugins.push(serve({
    port: 8080,
    contentBase: [''],
  }))
}
export default {
    input: 'src/jzRequest/index.ts',
    output: [
        {
          file: 'lib/a.js',
          format: 'es',
          sourcemap: true,
        },
        {
          input: './src/jzRequest/index.ts',
          output: [{ file: 'lib/a.d.ts', format: 'es' }],
          plugins: [dts()],
        },
    ],
    plugins
};
