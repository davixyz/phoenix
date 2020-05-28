#!/usr/bin/env node
const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;

const currentWorkingPath = process.cwd();
const { main, name } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, main);
const outputPath = path.join(currentWorkingPath, 'dist');

const fileName = name.replace('@carlosdev/', '');
console.log(fileName);

// see below for details on the options
const inputOptions = {
  input: inputPath,
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
  ],
};
const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
  },
];

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);
  // or write the bundle to disk
  // await bundle.write(outputOptions);
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
