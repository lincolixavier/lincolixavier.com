const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--work-and-play-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/WorkAndPlay.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/Index.vue")

export default [
  {
    path: "/pt/blog/2020/como-ganhar-dinheiro-sendo-programador/",
    component: c1,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/pt/blog/2021/9-apis-que-fazem-magica/",
    component: c1,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/en/blog/2020/como-ganhar-dinheiro-sendo-programador/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/en/blog/2021/9-apis-que-fazem-magica/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/blog/:year/:slug/",
    component: c1,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/pt/work-and-play/",
    component: c2,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/en/work-and-play/",
    component: c2,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/pt/blog/",
    component: c3,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/pt/about/",
    component: c4,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "404__pt",
    path: "/pt/404/",
    component: c5,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/en/blog/",
    component: c3,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/en/about/",
    component: c4,
    meta: {
      locale: "en"
    }
  },
  {
    name: "404__en",
    path: "/en/404/",
    component: c5,
    meta: {
      locale: "en"
    }
  },
  {
    name: "__pt_slug",
    path: "/pt/:slug+",
    component: c5,
    meta: {
      dataPath: "/pt/_slug_plus.json",
      dynamic: true,
      locale: "pt"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c5,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en"
    }
  },
  {
    path: "/work-and-play/",
    component: c2,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "home__pt",
    path: "/pt/",
    component: c6,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "home__en",
    path: "/en/",
    component: c6,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/blog/",
    component: c3,
    meta: {
      locale: "pt"
    }
  },
  {
    path: "/about/",
    component: c4,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c5,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "home",
    path: "/",
    component: c6,
    meta: {
      locale: "pt"
    }
  },
  {
    name: "*",
    path: "*",
    component: c5,
    meta: {
      locale: "pt"
    }
  }
]
