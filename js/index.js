const components = {
  navbar: {
    html: './sections/components/navbar/navbar.html',
    js: ''
  },
  hero: {
    html: './sections/components/hero/hero.html',
    js: './sections/components/hero/hero.js'
  },
  statics: {
    html: './sections/components/statics/statics.html',
    js: './sections/components/hero/hero.js'
  },
  methodology: {
    html: './sections/components/methodology/methodology.html',
    js: ''
  },
  benefits: {
    html: './sections/components/benefits/benefits.html',
    js: ''
  },
  receive: {
    html: './sections/components/receive/receive.html',
    js: ''
  },
  contexts: {
    html: './sections/components/contexts/contexts.html',
    js: '',
  },
  modules: {
    html: './sections/components/modules/modules.html',
    js: '',
  },
  games: {
    html: './sections/components/games/games.html',
    js: '',
  },
  reviews: {
    html: './sections/components/reviews/reviews.html',
    js: '',
  }
};

document.addEventListener('DOMContentLoaded', async () => {

  for (const [name, component] of Object.entries(components)) {

    await loadComponent(name, component);
  }

});


async function loadComponent(name, component) {

  const response = await fetch(component.html);

  document.getElementById(name).innerHTML =
    await response.text();

  if (component.js) {

    const script = document.createElement('script');

    script.src = component.js;

    document.body.appendChild(script);

  }
}