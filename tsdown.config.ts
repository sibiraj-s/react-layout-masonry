import { defineConfig } from 'tsdown';

const config = defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  minify: Boolean(process.env.CI),
});

export default config;
