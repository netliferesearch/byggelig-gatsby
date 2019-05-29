[![Netlify Status](https://api.netlify.com/api/v1/badges/9c9c731f-0838-48e5-8380-4eb3137cd655/deploy-status)](https://app.netlify.com/sites/byggelig/deploys)

# Bygg21

Nettside for Bygg21. TODO: Beskrivelse av prosjektet.

Site: https://byggelig.netlify.com/

## Om prosjektet

**Tech-stack:**

- Starter: Gatsby starter default
- Styling: SASS + classnames
- Hosting/ops: Netlify
- CMS: Sanity

## Utvikling

### Webside

1. `npm install`
2. `npm run dev`
3. Prosjektet kjører på `localhost:8000`

### Sanity

1. `cd studio`
2. Install Sanity: `npm install -g @sanity/cli`
3. Install dependencies: `npm i`
4. Run Sanity studio: `sanity start`

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

### Caching / Offline mode
We use a plugin for enabling offline mode. Caching is notoriously for causing weird bugs where things are not updating for some users. No problems so far(!) and major speed and PWA benefits, but if things go wrong, this plugin can be disabled following these steps: 
https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#remove 

Also see `gatsby-browser.js`. It has a small script listening for changes and using a serviceworker to reload the page if it notices any changes compared to cached / offline files.

## Prosjektregler

- Alle stiler skriver med SCSS (SASS)
- Følg AirBnB sin sass-styleguide: https://github.com/airbnb/css
- Bruk BEM-metologien, og følg reglene slavisk: http://getbem.com/
- Prøv å lag React komponenter uten state først.
- Følg WCAG 2.0 kravene med Difi sine modifikasjoner: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden

## Styling regler

- Komponentene skal ha 100% bredde. Griddet eller andre wrappere skal bestemme bredden. Unntaket er komponenter som har bredde basert på innholdet (f. eks. tekst/inline).
- Komponentene skal ikke bestemme det vertikale og hosrisontale mellomrommet rundt seg. Bruk css-klasser for spacing på wrapper-elementer på komponentene for å lage mellomrom.
- BEM: Ikke legg elements i elements, eller elements i modifiers. Block -> Modifier eller Block -> Element -> Modifier.

## SASS dependencies

- Grid: https://github.com/m-spyratos/bootstrap-4-grid

## Gatsby

Our site is based on: https://github.com/gatsbyjs/gatsby-starter-default and uses a plugin for pulling data from Sanity.io into Gatsby: https://www.gatsbyjs.org/packages/gatsby-source-sanity/

## Checking for broken links

After building with Gatsby we run the commmand line tools link-checker. It checks the built files on the file system in the `/public` directory. It outputs information about the broken links as JSON. This string gets piped into the Node program `linkChecker.js`.

`linkChecker.js` checks if there are any items in the broken link list. If there are any items it creates a HTML file called `broken-links.html` into `/public`. It lists out the page with the error, the broken links on the page and the error message. If there are no errors it does nothing. Gatsby's build command deletes the `/public` directory on each build, meaning the file will not be published if there were no errors, and would be removed if there is no errors anymore. 
