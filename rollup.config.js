import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: [
        {
            file: '/es/main.js',
            format: 'es',
            sourcemap: true,
        },
        {
            file: 'lib/main.js',
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        typescript({}),
        babel({
            babelHelpers: 'runtime',
        }),
        eslint({}),
        terser(),
    ],
};
