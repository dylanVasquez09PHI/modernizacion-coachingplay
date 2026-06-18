const components = {
  navbar: './sections/components/navbar/navbar.html',
  hero: './sections/components/hero/hero.html',
  statics: './sections/components/statics/statics.html',
  benefits: './sections/components/benefits/benefits.html',
  receive: './sections/components/receive/receive.html',
  contexts: './sections/components/contexts/contexts.html',
  modules: './sections/components/modules/modules.html'
  // footer: './sections/components/footer/footer.html'
};

document.addEventListener('DOMContentLoaded', async () => {
  for (const [id, file] of Object.entries(components)) {
    try {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${file}`);
      }

      const html = await response.text();

      const container = document.getElementById(id);

      if (container) {
        container.innerHTML = html;
      } else {
        console.warn(`No existe el elemento con id="${id}"`);
      }

    } catch (error) {
      console.error(`Error cargando ${file}:`, error);
    }
  }
});