import type { ClientDirective } from 'astro';

// Hydrates after the given number of milliseconds, so server-rendered output stays visible for demos
const delayDirective: ClientDirective = (load, options) => {
  const delay = Number(options.value) || 2000;

  setTimeout(async () => {
    const hydrate = await load();
    await hydrate();
  }, delay);
};

export default delayDirective;

declare module 'astro' {
  interface AstroClientDirectives {
    'client:delay'?: number;
  }
}
