/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-source-graphql`,
    {
      resolve: 'gatsby-source-multi-api',
      options: {
        apis: [
          {
            prefix: 'JobApi',
            baseUrl: 'http://localhost:12345',
            endpoints: ["jobs"],
            
          }
        ],
      },
    },
  ],
}
