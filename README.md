# [**ESLint**][eslint] configuration <!-- omit in toc -->

[**ESLint**][eslint] configuration based on [**XO**][xo].

- Configuration based on [**XO**][xo].
- Indentation using spaces.
- Support for [**Prettier**](https://prettier.io/) as a separate tool for formatting.

---

[![npm version](https://img.shields.io/npm/v/@vidavidorra/eslint-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/eslint-config)
[![npm downloads](https://img.shields.io/npm/dm/@vidavidorra/eslint-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/eslint-config)
[![Node.js version support](https://img.shields.io/node/v/@vidavidorra/eslint-config?logo=node.js&style=flat-square)](https://nodejs.org/en/about/releases/)
[![Renovate](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=renovatebot&logoColor=&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Code coverage](https://img.shields.io/codecov/c/github/vidavidorra/eslint-config?logo=codecov&style=flat-square)](https://codecov.io/gh/vidavidorra/eslint-config)
[![License](https://img.shields.io/github/license/vidavidorra/eslint-config?style=flat-square)](LICENSE.md)

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

```sh
npm install --save-dev @vidavidorra/eslint-config eslint
```

## Usage

Use this configuration in your project's [**ESLint**][eslint] configuration by re-exporting this configuration in the [**ESLint**][eslint] [configuration file](https://eslint.org/docs/latest/use/configure/configuration-files). The following example show the configuration in an `eslint.config.js` file.

```js
export {default} from '@vidavidorra/eslint-config';
```

As documented in the the [**ESLint**][eslint] [Share Configuration](https://eslint.org/docs/latest/extend/shareable-configs) documentation, configurations can also be extended and overridden. The following example shows such an example, again in the `eslint.config.js` file.

```js
import vidavidorraConfig from '@vidavidorra/eslint-config';

const config = [
  ...vidavidorraConfig,
  {
    ignores: ['modules/'],
    rules: {
      // Override the "unicorn/no-new-array" rule from the shared configuration.
      'unicorn/no-new-array': 'off',
    },
  },
];

export default config;
```

## Contributing

Please [create an issue](https://github.com/vidavidorra/eslint-config/issues/new/choose) if you have a bug report or feature proposal, or [create a discussion](https://github.com/vidavidorra/eslint-config/discussions) if you have a question. If you like this project, please consider giving it a star ⭐ to support my work.

Refer to the [contributing guide](https://github.com/vidavidorra/.github/blob/main/CONTRIBUTING.md) for detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://conventionalcommits.org)
[![XO code style](https://img.shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&style=flat-square)](https://github.com/xojs/xo)
[![Prettier code style](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/eslint-config/security) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2025 Jeroen de Bruijn

<details><summary>License notice</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html)

</details>

<!-- References -->

[eslint]: https://eslint.org/
[xo]: https://github.com/xojs/xo
