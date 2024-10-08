// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Lincoli Xavier',
  siteUrl: 'https://www.lincolixavier.com',
  siteDescription: 'Meu humilde portifólio na internet',
  templates: {
    Post: '/blog/:year/:slug'
  },
  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
          typeName: 'Post',
          path: 'content/posts/*.md',
          route: '/blog/:slug',
      }
    },

    {
      // Create jobs from markdown files
      use: '@gridsome/source-filesystem',
      options: {
          typeName: 'Jobs',
          path: 'content/jobs/*.md'
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
        externalLinksTarget: '_blank',
        externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        anchorClassName: 'icon icon-link',
        plugins: [
            //'@gridsome/remark-prismjs',
            'gridsome-plugin-remark-prismjs-all'
        ]
    }
},
  
}
