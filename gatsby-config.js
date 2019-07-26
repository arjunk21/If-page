require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    keywords: '',
    siteUrl: 'https://example.com',
    image: 'https://example.com/logo.png',
    author: {
      name: 'Benjamin Bressington',
      minibio: `Founder of LeadFollow | Retargeting Marketing Geofencing spealicist.`
    },
    organization: {
      name: 'Company LLC',
      url: 'https://example.com',
      logo: 'https://example.com/logo.png'
    },
    social: {
      twitter: '@',
      fbAppID: ''
    },
    categories: [
      {
        slug: 'marketing',
        name: 'Marketing'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 970
            }
          },
          {
            resolve: 'gatsby-remark-better-embed-video',
            options: {
              width: 600,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
              height: 340, // Optional: Overrides optional.ratio.
              related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
              showInfo: false // Optional: Hides video title and player actions.
            }
          },
          `gatsby-remark-responsive-iframe`,
          'gatsby-remark-component'
          //`gatsby-remark-social-cards`
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    'gatsby-plugin-formol',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        //includePaths: [`${__dirname}/node_modules`],
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: '',
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: []
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        //sampleRate: 5,
        //siteSpeedSampleRate: 10,
        //cookieDomain: "example.com",
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://leadfollow.us20.list-manage.com/subscribe/post?u=2c0c431485f77a06d6ecf2dc7&id=11bb54e065' // add your MC list endpoint here; see instructions below
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: ''
      }
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: ``,

        // Include LinkedIn Insight in development.
        // Defaults to false meaning LinkedIn Insight will only be loaded in production.
        includeInDevelopment: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``,
        short_name: ``,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/icon.png'
      }
    },
    `gatsby-plugin-offline`
  ]
}
