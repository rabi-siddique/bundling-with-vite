import { defineConfig } from 'vite';

function removeCrossorigin() {
  return {
    name: 'remove-crossorigin',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(/\s+crossorigin/g, '');
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [removeCrossorigin()],
});
