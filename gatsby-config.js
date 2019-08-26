require('dotenv').config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Byggelig`,
    siteUrl: `https://byggelig.no`,
    description: `Veiledning for effektive og bærekraftige byggeprosesser`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'w6mawr56',
        dataset: 'production',
        token: process.env.SANITY_GATSBY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-W27Z4RN',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './favicon.svg'
      }
    },
    {
      options: {
        name: `Byggelig`,
        short_name: `Byggelig`,
        start_url: `/`,
        background_color: `#2d0469`,
        theme_color: `#2d0469`,
        display: `minimal-ui`
      }
    }
  ]
};
