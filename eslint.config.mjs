import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu({
    lessOpinionated: true,

    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          newlinesBetween: 0,
        },
      ],
    },

    stylistic: {
      overrides: {
        'curly': 'off',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
        ],
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

    typescript: {
      overrides: {
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/array-type': ['error', { default: 'array-simple', readonly: 'array-simple' }],
        'ts/member-ordering': ['error', { default: { optionalityOrder: 'required-first' } }],
      },
    },

    vue: {
      overrides: {
        'vue/operator-linebreak': ['error', 'before'],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
      },
    },
  }),
)
