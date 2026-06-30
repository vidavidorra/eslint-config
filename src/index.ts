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
  {
    files: ['**/CHANGELOG.md'],
    rules: {'markdown/no-duplicate-headings': 'off'},
  },
  {
    rules: {'unicorn/consistent-boolean-name': 'off'},
  },
];

export default config;
