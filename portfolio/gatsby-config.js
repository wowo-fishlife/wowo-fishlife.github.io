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
    {
      resolve:`gatsby-plugin-sharp`,
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
          `ZCOOL XiaoWei\:500`,
          `Merriweather\:500`,
          `Noto Serif JP\:500`,
          `Roboto\:500`,
        ],
        display:'swap'
      }
    }
  ],
}
