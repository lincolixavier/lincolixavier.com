export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/lincolixavier/Documents/Projetos/lincolixavier/lincolixavier.com/src/pages/About.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lincolixavier/Documents/Projetos/lincolixavier/lincolixavier.com/src/pages/Index.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    path: "/work-and-play",
    component: () => import(/* webpackChunkName: "page--src--pages--work-and-play-vue" */ "/Users/lincolixavier/Documents/Projetos/lincolixavier/lincolixavier.com/src/pages/WorkAndPlay.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Documents/Projetos/lincolixavier/lincolixavier.com/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Documents/Projetos/lincolixavier/lincolixavier.com/node_modules/gridsome/app/pages/404.vue"),
    meta: {
      data: [1,"522cd836"]
    }
  }
]

