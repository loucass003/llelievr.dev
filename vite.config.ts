import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownItVideo from 'markdown-it-video'

import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  ExternalFluentPlugin,
  SFCFluentPlugin,
} from 'unplugin-fluent-vue/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    SFCFluentPlugin({
      blockType: 'fluent', // default 'fluent' - name of the block in SFCs
      checkSyntax: true, // default true - whether to check syntax of the messages
    }),
    ExternalFluentPlugin({
      locales: ['en', 'fr'], // required - list of locales
      checkSyntax: true, // default true - whether to check syntax of the messages
      baseDir: path.resolve('src'), // base directory for Vue files
      ftlDir: path.resolve('src/locales'), // directory with ftl files
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(MarkdownItVideo)
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
