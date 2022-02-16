module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: ['standard', 'plugin:vue/base', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    // 函数最大深度
    'max-depth': ['error', 5],
    // 函数最大行数
    'max-lines-per-function': ['error', 200],
    // 'function-paren-newline': ['error', { minItems: 5 }],
    'function-paren-newline': ['error', 'consistent'],
    // 文件最大行数
    'max-lines': ['error', 1500],
    'max-len': ['error', { code: 150 }],
    // 是否允许debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/comment-directive': 'off',
    'vue/no-unused-vars': 'off',
    'array-bracket-newline': ['error', { multiline: true }],
    // 函数参数前的空格
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-unused-vars': [
      'off',
      {
        ignorePattern: '^_'
      }
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['default']
      }
    ],
    'no-useless-constructor': 'off',
    // class和switch block语句必须有padding line
    'padded-blocks': [
      'error',
      {
        switches: 'always',
        classes: 'always'
      }
    ],
    'no-dupe-class-members': 'off',
    'no-throw-literal': 'off',
    // 关闭回调函数必须放在参数第一个
    'node/no-callback-literal': 'off',
    // 可以使用return跳过语句
    'no-useless-return': 'off',
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    // ts有相关的提示, Cannot find name 'a'
    'no-undef': 'off',

    // if else的折叠关了
    'brace-style': 'off'
  },
  overrides: [
    {
      files: ['src/pages/**', 'src/components/**'],
      rules: {
        'max-lines-per-function': ['error', 800]
      }
    }
  ],
  globals: {
    // 规避script setup语法下的eslint报错
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
