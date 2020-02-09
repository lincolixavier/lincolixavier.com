// This is the main.js file. Import global CSS and scripts here.

import Header from '~/layouts/Header.vue'
import Logo from '~/components/Logo.vue'


export default function (Vue, { router, head, isClient }) {

  head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap'
  })
  // Set default layout as a global component
  Vue.component('Header', Header);
  Vue.component('Logo', Logo);


}
