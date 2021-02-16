// This is the main.js file. Import global CSS and scripts here.
import '~/assets/main.scss'
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue'

import Logo from '~/components/Logo.vue'
import Default from '~/layouts/Default.vue'
import VueDisqus from 'vue-disqus'
//require("gridsome-plugin-remark-prismjs-all/themes/tomorrow.css");
require("gridsome-plugin-remark-prismjs-all/themes/solarized.css");

export default function (Vue, { router, head, isClient }) {

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
  // Set default layout as a global component
  Vue.component('Header', Header);
  Vue.component('Footer', Footer);
  Vue.component('Logo', Logo);
  Vue.component('Layout', Default);
  Vue.use(VueDisqus) 

}
