const path = require('path');
const express = require('express');
const { Reader } = require('@maxmind/geoip2-node');

const app = express();

let csvData;

async function readCsv() {
  const reader = await Reader.open('./server/GeoLite2-City.mmdb');
  csvData = reader;
}

readCsv();

/* eslint-disable-next-line consistent-return */
app.get('/search', async (req, res) => {
  const { ip } = req.query;
  if (!ip) {
    return res.redirect('/');
  }

  if (!csvData) {
    return res.send('Data not ready');
  }

  try {
    const { latitude, longitude } = csvData.city(ip).location;

    res.send({ latitude, longitude });
  } catch (err) {
    res.send(err);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/', 'index.html'));
});

module.exports = { app, readCsv };
