const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const input = [];

rl.on('line', line => {
  input.push(line);
});

rl.on('close', () => {
  const linkErrors = JSON.parse(input.join('\n'));
  // We're not interested in anchor links. Mainly because bygg21.no has implemented them wrong, making it return errors all the time.
  const errors = linkErrors.stats.errors.filter(
    error => error.type !== 'remote-anchor'
  );
  // If there are no errors, we stop here.
  if (!errors.length) {
    return;
  }
  const stream = fs.createWriteStream('public/broken-links.html');
  stream.once('open', () => {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <style>
        body {
          font-size: 16px;
          font-family: sans-serif;
        }
        li {
          margin-bottom: 1rem;
        }
      </style>
      </head>
      <body>
        <h1>Sider med døde lenker 👻</h1>
        <ul>
          ${errors
            .map(
              error => `
            <li>
              Side: <a href="/${error.source}">${error.source}</a>
              <br />
              Lenke: <a href="/${error.target}">${error.target}</a>
              <br />
              Feilmelding: ${error.reason}
            </li>
          `
            )
            .join('')}
        </ul>
      </body>
    </html>
    `;
    stream.end(html);
  });
});
