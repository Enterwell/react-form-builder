import fs from 'fs-extra';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from 'rollup-plugin-esbuild'

const packageJson = fs.readJsonSync("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve({
                browser: true
            }),
            commonjs(),
            esbuild({
                tsconfig: './tsconfig.json',
                target: 'esnext',
                minify: false,
                jsx: 'automatic'
            })
        ]
    }
];