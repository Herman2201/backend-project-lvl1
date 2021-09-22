module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "no-console":0,
    "import/extensions":0,
    "quotes":0,
    "no-confusing-arrow":0,
    "no-unused-vars":0,
    "eqeqeq":0,
  },
};
