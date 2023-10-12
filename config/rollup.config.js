import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import json from '@rollup/plugin-json';
import commonjs from "@rollup/plugin-commonjs";

const extensions = ['.js', '.ts']
export default [
    {
        input: '../src/index.ts',
        output: [
            {
                file: '../dist/index.js',
                format: 'es'
            }
        ],
        plugins: [
            nodeResolve(),
            typescript({
                "tsconfig": "config/tsconfig.json"
            }),
            commonjs(),
            json()
        ]
    }
    ]