import js from '@eslint/js';
import globals from 'globals';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import security from 'eslint-plugin-security';

export default [
  { ignores: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '.temp/**'] },
  js.configs.recommended,
  // Flags DOM XSS sinks such as innerHTML and insertAdjacentHTML, and common unsafe patterns.
  noUnsanitized.configs.recommended,
  security.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    files: ['*.config.js', '**/vite.config.js', 'scripts/**/*.js'],
    languageOptions: { globals: { ...globals.node } },
  },
];
