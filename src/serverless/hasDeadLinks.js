const axios = require('axios');
const sgMail = require('@sendgrid/mail');

const brokenLinksDomain = 'https://byggelig.no/broken-links.html';

const { HAS_DEAD_LINKS_SECRET, SG_API_KEY, EMAIL_RECIPIENTS } = process.env;

sgMail.setApiKey(SG_API_KEY);

const msg = {
  to: EMAIL_RECIPIENTS,
  from: `Byggelig Robot <robot@byggelig.no>`,
  subject: 'Liste med ødelagte lenker – Byggelig.no 🤖',
  text: brokenLinksDomain,
  html: `Det finnes ødelagte lenker på byggelig.no<br /><a href="${brokenLinksDomain}">Se hvilke lenker som ikke fungerer lenger</a>`
};

exports.handler = async (event, context) => {
  const secret = event.queryStringParameters.secret;

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: '405 Method Not Allowed'
    };
  }

  // Don't continue if the secret is wrong, or if someone removed the secret.
  if (secret !== HAS_DEAD_LINKS_SECRET || !HAS_DEAD_LINKS_SECRET) {
    return {
      statusCode: 403,
      body: '403 Forbidden'
    };
  }

  return axios(brokenLinksDomain)
    .then(res => res.status)
    .then(status => {
      if (status !== 200) {
        return 'no email sent';
      }
      if (!EMAIL_RECIPIENTS) {
        return 'No recipients in variables.';
      }
      // Vi sender en epost siden det finnes en side som har en liste med feil.
      return sgMail.send(msg);
    })
    .then(mailRes => ({
      statusCode: 200,
      body: `OK. Mail status: ${JSON.stringify(mailRes)}`
    }));
};
