import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  lessOpinionated: true,

  rules: {
    // [import-x] available via @antfu/eslint-config - https://github.com/un-ts/eslint-plugin-import-x
    'import/export': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-dynamic-require': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': {
          caseInsensitive: false,
          order: 'asc',
        },
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'perfectionist/sort-imports': 'off',

    // [custom]
    'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    'prefer-arrow-callback': 'error',
  },

  vue: {
    overrides: {
      'vue/operator-linebreak': ['error', 'before'],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
        },
      ],
    },
  },

  typescript: {
    overrides: {
      'ts/consistent-type-definitions': ['error', 'interface'],
      'ts/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple',
        },
      ],
      'ts/member-ordering': [
        'error',
        {
          default: {
            optionalityOrder: 'required-first',
          },
        },
      ],
    },
  },

  stylistic: {
    overrides: {
      'curly': 'off',
      'style/brace-style': ['error', 'stroustrup', {
        allowSingleLine: true,
      }],
      'style/max-len': ['error', {
        code: 130,
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: '^import\\s.*$|^const\\s\\{[^}]*\\}\\s*=.*$',
      }],
      'style/object-curly-newline': ['error', {
        ObjectPattern: {
          minProperties: 4,
          multiline: false,
        },
        ImportDeclaration: {
          minProperties: 5,
          multiline: false,
        },
        ExportDeclaration: {
          minProperties: 5,
          multiline: false,
        },
      }],
    },
  },
}).append(nuxt())
