import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  site: 'https://demo.kukerjain.web.id',
  base: '/kukereyes/',
  trailingSlash: 'always',
});
