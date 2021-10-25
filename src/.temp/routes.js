const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--work-and-play-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/WorkAndPlay.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/lincolixavier/Projects/lincolixavier/lincolixavier.com/src/pages/Index.vue")

export default [
  {
    path: "/blog/:slug/",
    component: c1
  },
  {
    path: "/work-and-play/",
    component: c2
  },
  {
    path: "/blog/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
