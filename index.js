const express = require('express');
const path = require('path');
const { Reader } = require('@maxmind/geoip2-node');

const host = '0.0.0.0';
const port = 3000;
const app = express();

Reader.open('./GeoLite2-City.mmdb').then((reader) => {
  const csvData = reader;

  app.get('/search', async (req, res) => {
    const { ip } = req.query;
    if (!ip) {
      res.redirect('/');
    }

    try {
      const { latitude, longitude } = csvData.city(ip).location;

      res.send({ latitude, longitude });
    } catch (err) {
      res.send(err);
    }
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/', 'index.html'));
  });

  app.listen(port, host);

  /* eslint-disable-next-line no-console */
  console.log(`Server running on http://${host}:${port}`);
});
