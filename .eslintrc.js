module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/jsx-runtime',
      'plugin:astro/recommended',
      'prettier',
    ],
    overrides: [
      {
        // Define the configuration for `.astro` file.
        files: ['*.astro'],
        // Allows Astro components to be parsed.
        parser: 'astro-eslint-parser',
        // Parse the script in `.astro` as TypeScript by adding the following configuration.
        // It's the setting you need when using TypeScript.
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
        rules: {
          // override/add rules settings here, such as:
          // "astro/no-set-html-directive": "error"
          'react/no-unknown-property': ['error', { ignore: ['class', 'is:global', 'set:html'] }],
          'max-len': 'off',
          'react/jsx-key': 'off',
        },
      },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'max-len': [1, { code: 120 }],
      // TODO: temp fix for api type issue
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
    ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
    settings: {
      react: {
        version: '16.13.1',
      },
    },
  };
  