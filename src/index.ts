import eslintConfigXo from 'eslint-config-xo';
import {type Linter} from 'eslint';

const config: Linter.Config[] = [
  ...eslintConfigXo({
    space: true,
    prettier: 'compat',
  }).filter(({name}) => name !== 'xo/jsdoc' && name !== 'xo/jsdoc-typescript'),
  {
    files: ['**/package-lock.json'],
    rules: {
      'json/no-empty-keys': 'off',
    },
  },
];

export default config;
