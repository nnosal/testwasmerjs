import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite';

/*
import fs from 'fs';
import path from 'path';
const htmlFiles = fs
  .readdirSync('.')
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    acc[file.replace('.html', '')] = path.resolve(__dirname, '.', file);
    return acc;
  }, {});
*/

export default defineConfig({
  server: {
    headers: {
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: './node_modules/@wasmer/sdk/dist/', dest: './node_modules/@wasmer/sdk/' },
        { src: '*.html', dest: '.' },
        { src: 'coi-serviceworker.js', dest: '.' },
        { src: 'Caddyfile', dest: '.' }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        //...htmlFiles,
      },
    },
  },
});