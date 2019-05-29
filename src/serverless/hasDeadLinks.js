exports.handler = async (event, context) => {
  const secret = event.queryStringParameters.secret;

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: '405 Method Not Allowed'
    };
  }

  const { HAS_DEAD_LINKS_SECRET } = process.env;

  if (secret !== HAS_DEAD_LINKS_SECRET) {
    return {
      statusCode: 403,
      body: '403 Forbidden'
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify('okely dokely')
  };
};
