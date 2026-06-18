const components = {
  navbar: './sections/components/navbar/navbar.html',
  hero: './sections/components/hero/hero.html',
  statics: './sections/components/statics/statics.html',
  benefits: './sections/components/benefits/benefits.html',
  receive: './sections/components/receive/receive.html',
  contexts: './sections/components/contexts/contexts.html',
  modules: './sections/components/modules/modules.html',
  footer: './sections/components/footer/footer.html'
};

document.addEventListener('DOMContentLoaded', async () => {

  for (const [id, file] of Object.entries(components)) {

    const response = await fetch(file);

    document.getElementById(id).innerHTML =
      await response.text();
  }
});