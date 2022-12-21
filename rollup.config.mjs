import fs from 'fs-extra';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from 'rollup-plugin-esbuild'
import summary from "rollup-plugin-summary";

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
                tsconfig: './tsconfig.build.json',
                target: 'esnext',
                minify: true,
                jsx: 'automatic'
            }),
            summary({
                showGzippedSize: true
            })
        ]
    }
];