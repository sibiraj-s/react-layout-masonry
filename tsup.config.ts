import { defineConfig } from 'tsup';

const config = defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  splitting: false,
  minify: Boolean(process.env.CI),
});

export default config;
