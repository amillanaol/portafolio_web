import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import nuxtPlugin from 'eslint-plugin-nuxt'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.ts', '**/*.vue'],
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
