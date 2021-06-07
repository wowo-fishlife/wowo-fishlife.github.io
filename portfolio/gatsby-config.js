/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: '狂乱詩好'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon.jpeg',

      }
    },
    {
      resolve:`gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve:`gatsby-plugin-google-fonts`,
      options:  {
        fonts:[
          `ZCOOL XiaoWei\:400`,
          `Merriweather\:400`,
          `Noto Serif JP\:500`,
          `Roboto\:400`,
        ],
        display:'swap'
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      }
    }
  ],
}
