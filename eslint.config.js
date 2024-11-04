import pegasus from 'eslint-config-pegasus';
import prettier from 'eslint-config-prettier';

export default pegasus.tsConfig(
  pegasus.configs.default,
  pegasus.configs.browser,
  pegasus.configs.react,
  prettier,
  {
    name: 'custom',
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...pegasus.configs.typescript, prettier],
  },
  {
    files: ['docs/**/*.ts', 'docs/**/*.tsx'],
    extends: [...pegasus.configs.typescript, prettier],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: 'docs/',
      },
    },
  },
);
