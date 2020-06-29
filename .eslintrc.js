module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    "react": {
      "version": "16"
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
  }
}
