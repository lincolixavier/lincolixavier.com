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
                '@gridsome/remark-prismjs',
                'gridsome-plugin-remark-prismjs-all'
            ]
        }
    },
}
