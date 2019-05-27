module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'w6mawr56',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bygg21`,
        short_name: `bygg21`,
        start_url: `/`,
        background_color: `#2d0469`,
        theme_color: `#2d0469`,
        display: `minimal-ui`,
        icon: `src/images/favicon-example.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location);

  console.log(currentPosition);

  window.scrollTo(...(currentPosition || [100, 100]));

  return false;
};
