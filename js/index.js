const components = {
  navbar: '../sections/components/navbar.html',
  hero: '../sections/components/hero.html',
  statics: '../sections/components/statics.html',
  benefits: '../sections/components/benefits.html',
  receive: '../sections/components/receive.html',
  contexts: '../sections/components/contexts.html',
  modules: '../sections/components/modules.html',
  footer: '../sections/components/footer.html'
};

document.addEventListener('DOMContentLoaded', async () => {

  for (const [id, file] of Object.entries(components)) {

    const response = await fetch(file);

    document.getElementById(id).innerHTML =
      await response.text();
  }
});