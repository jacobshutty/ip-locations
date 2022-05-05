const express = require('express');
const { app } = require('./server/routes');

const host = '0.0.0.0';
const port = 3000;

app.use(express.static('./client'));

app.listen(port, host);

/* eslint-disable-next-line no-console */
console.log(`Server running on http://${host}:${port}`);
