import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist', // ビルド成果物を 'dist/' に出力
    format: 'es', // ESモジュール形式
    sourcemap: !production, // 開発時のみソースマップを有効化
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production,
      }
    }),
    css({ output: 'bundle.css' }), // CSS を 'dist/' に出力
    resolve({
      browser: true,
      dedupe: ['svelte'],
      exportConditions: ['browser'],
      treeShaking: true,
    }),
    copy({
      targets: [
          { src: 'public/*', dest: 'dist' } // public の内容を dist にコピー
      ]
    }),
    commonjs({
      ignoreTryCatch: false,
    }),
    !production &&
      serve({
        contentBase: 'dist', // 'dist/' をサーバーのルートに設定
        port: 8080,
        open: true,
      }),
    !production && livereload({ watch: 'dist' }), // 'dist/' を監視
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
