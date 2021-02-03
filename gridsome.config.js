module.exports = {
  siteName: 'Lincoli Xavier',
  siteUrl: 'https://www.lincolixavier.com',
  siteDescription: 'Meu humilde portifólio na internet',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-159332315-1'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
          typeName: 'Post',
          path: 'blog/posts/*.md',
          route: '/blog/:slug',
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
                '@gridsome/remark-prismjs'
            ]
        }
    },
}
