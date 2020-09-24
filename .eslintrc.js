module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  globals: {
    _: false,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
  },
};
