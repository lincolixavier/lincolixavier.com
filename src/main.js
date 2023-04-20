import '../src/styles/main.scss'
import Header from '../src/layouts/Header'
import Footer from '../src/layouts/Footer.vue'

import Logo from '../src/components/Logo.vue'
import Default from '../src/layouts/Default.vue'
import VueDisqus from 'vue-disqus'

require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");

export default function (Vue, { router, head, isClient, appOptions }) {

  head.link.push({
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap',
      as: 'style'
  })
  head.meta.push({
    name: 'theme-color',
    content: '#ff5858a6'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap'
  })
  head.script.push({
    src: '<https://www.googletagmanager.com/gtag/jsid=UA-159332315-1>',
    async: true
  })
  Vue.component('Header', Header);
  Vue.component('Footer', Footer);
  Vue.component('Logo', Logo);
  Vue.component('Layout', Default);
  Vue.use(VueDisqus) 
 
if (isClient) {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'UA-159332315-1');
  window.gtag = gtag; // expose gtag function to global scope
}
  appOptions.i18n.setLocaleMessage("pt", require("./locales/pt-br.json"));
  appOptions.i18n.setLocaleMessage("en", require("./locales/en-us.json"));

}
