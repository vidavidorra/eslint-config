import test from 'ava';
import {ESLint, Linter} from 'eslint';
import config from './index.js';

test('exports an object as "default"', (t) => {
  t.is(typeof config, 'object');
});

test('the ESLint "Linter" can use the config', (t) => {
  const code = 'const _ = new Array(2);\n';
  const linter = new Linter();

  /**
   * First establish that the code does not contain any linting errors with the
   * default ESLint configuration. This acts as proof that the Linter is
   * actually using the configuration.
   */
  t.deepEqual(linter.verify(code, ESLint.defaultConfig), []);

  const messages = linter.verify(code, config);
  t.is(messages.length, 1);
  t.is(messages[0]?.ruleId, 'unicorn/no-new-array');
});
