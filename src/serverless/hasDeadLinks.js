const nodeFetch = require('node-fetch');
const mailgun = require('mailgun-js');

const brokenLinksDomain = 'https://byggelig.netlify.com/broken-links.html';

const { HAS_DEAD_LINKS_SECRET, MG_API_KEY, MG_DOMAIN } = process.env;

const mg = mailgun({ apiKey: MG_API_KEY, domain: MG_DOMAIN });

const mailData = {
  from: `Netlife Robot <me@${MG_DOMAIN}>`,
  to: 'ole.stovern@netlife.com',
  subject: 'Byggelig – liste med ødelagte lenker',
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

  nodeFetch(brokenLinksDomain).then(res => {
    if (res.status !== 200) {
      return;
    }

    // Vi sender en epost siden det finnes en side som har en liste med feil.
    mg.messages().send(mailData, function(error, body) {
      console.log(error ? error : '', body);
    });
  });

  return {
    statusCode: 200,
    body: JSON.stringify('okely dokely')
  };
};
