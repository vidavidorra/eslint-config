import xo from 'xo';
import {type Linter} from 'eslint';

const config: Linter.Config[] = xo.xoToEslintConfig([
  {space: true, prettier: 'compat'},
]);

export default config;
