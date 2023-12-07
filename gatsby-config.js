/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // pathPrefix: `/blog`,
  siteMetadata: {
    title: `台灣股市投資策略智能回測`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    // PWA
    // https://web.dev/articles/add-manifest?hl=zh-tw
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     short_name: `智能投資回測`,
    //     name: `智測網：這種投資策略可行嗎？`,
    //     icon: `src/images/logo-512.png`, // This path is relative to the root of the site.
    //     // "icons": [
    //     //   // {
    //     //   //   "src": "/images/logo-color.svg",
    //     //   //   "type": "image/svg+xml",
    //     //   //   "sizes": "512x512"
    //     //   // },
    //     //   {
    //     //     "src": "/images/favicon-32.png",
    //     //     "type": "image/png",
    //     //     "sizes": "32x32"
    //     //   },
    //     //   {
    //     //     "src": "/images/logo-192.png",
    //     //     "type": "image/png",
    //     //     "sizes": "192x192"
    //     //   },
    //     //   {
    //     //     "src": "/images/logo-512.png",
    //     //     "type": "image/png",
    //     //     "sizes": "512x512"
    //     //   }
    //     // ],
    //     cache_busting_mode: 'none',
    //     start_url: `/`,
    //     background_color: `#FBCD08`,
    //     // theme_color: `#a2466c`,
    //     theme_color_in_head: false, // This will avoid adding theme-color meta tag.
    //     display: `standalone`,
    //     "scope": "/",
    //     "description": "台灣股市投資策略智能回測",
    //   },
    // },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/
    // https://developer.chrome.com/docs/workbox?hl=zh-tw#full_generatesw_config
    // {
    //    resolve: 'gatsby-plugin-offline',
    //    options: {
    //       workboxConfig: {
    //          globPatterns: ['**/images/*']
    //       }
    //    }
    // },

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/stock`,
        name: `stocks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/etf`,
        name: `etfs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/operation`,
        name: `operations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/daily/price`,
        name: `dailyPrice`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/daily/chip`,
        name: `dailyChip`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }) => {
          const name = node.sourceInstanceName
          if (name === `stocks`) {
            return `Stock`
          }
          if (name === `etfs`) {
            return `Stock`
          }
          if (name === `operations`) {
            return `Operation`
          }
          if (name === `dailyPrice`) {
            return `DailyPrice`
          }
          if (name === `dailyChip`) {
            return `DailyChip`
          }
          return name
        },
      },
    },
  ],
};
