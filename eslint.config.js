import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import nuxtPlugin from 'eslint-plugin-nuxt'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        useAbout: 'readonly',
        useProjects: 'readonly',
        useServices: 'readonly',
        useStack: 'readonly',
        useScrollReveal: 'readonly',
        useHead: 'readonly',
        ref: 'readonly',
        onMounted: 'readonly',
        onUnmounted: 'readonly'
      }
    },
    plugins: {
      nuxt: nuxtPlugin
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    ignores: [
      '.output/',
      'dist/',
      'node_modules/',
      '.nuxt/'
    ]
  }
]
