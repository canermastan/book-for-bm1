// More: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const name = 'nevu-bm1';
const shortName = 'nevü-bm1';

export default defineConfig({
  title: shortName,
  favicon: 'https://avatars3.githubusercontent.com/u/75602446?s=200&v=4',
  logo: 'https://avatars3.githubusercontent.com/u/75602446?s=200&v=4',
  outputPath: 'docs-dist',
  exportStatic: {},
  base: `/${name}/`,
  publicPath: `/${name}/`,
  hash: true,
  styles: [
    `
      html {
        scroll-behavior: smooth;
      }
      .markdown table {
        width: auto !important;
      }
      .markdown table td:first-child {
        font-weight: normal !important;
      }
    `,
  ],
});
