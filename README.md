[![Netlify Status](https://api.netlify.com/api/v1/badges/9c9c731f-0838-48e5-8380-4eb3137cd655/deploy-status)](https://app.netlify.com/sites/byggelig/deploys)

# Byggelig

This is a web application based on the research from Bygg21. It is a tool for better collaboration, planning and execution for property development and construction.

Site: https://www.byggelig.no

## Tech-stack

- Frontend: React with Gatsby
- Styling: SASS + classnames
- Hosting/ops: Netlify
- CMS: Sanity
- Serverless: Netlify Functions

## Development

### Frontend

1. `npm install`
2. `npm run dev`
3. You find the frontend running at `localhost:8000`

### Sanity

1. `cd studio`
2. Install Sanity: `npm install -g @sanity/cli`
3. Install dependencies: `npm i`
4. Run Sanity studio: `sanity start`
5. You find Sanity Studio at `localhost:3333`

**Important!**<br>
Remember to deploy changes to Studio after making changes to schemas: Run `npm run deploy`.

**Also important!**<br>
Remember that even though you work locally, changes made to the content in Studio will be globally. If you need to experiment with the data, download and work on a copy of the dataset: https://www.sanity.io/docs/data-store/migrating-data

**Sanity - manage users**<br>
https://manage.sanity.io/

**Sanity - edit content**<br>
https://byggelig.sanity.studio/

### Gatsby

If something is not working, you might try to build locally, and check your terminal for errors: `npm run build`.

## Deployment

We use Netlify as a web host. This GitHub repo is connected Netlify, and Netlify will build whenever code is pushed to the master branch. Netlify also handles our serverless functions.

Netlify is also connected to Sanity with a webhook, and will build when something is changed in Sanity.

It should build in about a minute. If nothing changes then something in the build process went wrong. The build log in Netlify should tell you what. It is recommended connecting a Slack bot between the Netlify site and your Slack user when developing. If something goes wrong the last working version will be the version deployed in production.

## Project rules

- Only write styles using SCSS
- Follow airbnbs sass styleguide: https://github.com/airbnb/css
- Use the BEM methology: http://getbem.com/
- Components should not have state by default. Don't use class for components if you need state, use hooks instead.
- Each component should have its own `.scss` file. Everything else goes where `main.scss` is.
- Follow the WCAG 2.0 guidelines with Difi's modifications/interpretation: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

## Additional styling rules

- The components should have 100% width. Only the grid or other layout components should decide the width of components, except for components with display inline.
- The components should not concern itself with spacing. There are wrapper classes handling the spacing.
- Don't open Pandora's box. When using BEM; don't put elements in elements, or elements in modifiers. `Block`, `Block -> Modifier`, `Block -> Element` or `Block -> Element -> Modifier`, no other patterns are allowed because it will break the BEM rules, and end up cluttering the project.

## SASS dependencies

- Grid: https://github.com/m-spyratos/bootstrap-4-grid
- Normalize: https://github.com/necolas/normalize.css

## Gatsby

Our site is based on: https://github.com/gatsbyjs/gatsby-starter-default and uses a plugin for pulling data from Sanity.io into Gatsby: https://www.gatsbyjs.org/packages/gatsby-source-sanity/

## Checking for broken links

Every week (wednesday 09:00) a scheduled task triggers a webhook to our serverless function which then checks for broken links on our website. It will email the web editors with a link to a list of broken links and where to find them if there are any.

This service requires three services:

- Zapier: for scheduling
- Netlify Functions: For finding broken links and notifying
- Sendgrid: API service for sending email

If there are any broken links, then the serverless function creates the HTML-page the email links to. No page will be made if there are no errors, making the link return 404. This page will redirect to another page, if it doesn't exist, telling the editor that everything is ok.

Variables is handeled in `Netlify -> Byggelig -> Settings -> Build & deploy -> Environment`<br>
Here you can add and remove email recipients, and handle other stuff.
