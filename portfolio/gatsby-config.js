/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve:`gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      },
    },
    {
      resolve:`gatsby-plugin-google-fonts`,
      options:  {
        fonts:[
          `ZCOOL XiaoWei`,
          `Merriweather`,
          `Roboto`,
          `Noto Serif JP`,
        ],
        display:'swap'
      }
    }
  ],
}
