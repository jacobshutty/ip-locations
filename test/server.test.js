const request = require('supertest');
const { app, readCsv } = require('../server/routes');

describe('Test root path', () => {
  test('It should return the client', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/html');
  });
});

describe('Test IP search request', () => {
  test('It should return location data for given IP', async () => {
    await readCsv();
    const response = await request(app).get('/search?ip=103.130.232.0');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(typeof response.body.latitude).toBe('number');
    expect(typeof response.body.longitude).toBe('number');
  });
});

describe('Test search without IP redirect', () => {
  test('It should redirect request to root', async () => {
    await readCsv();
    const response = await request(app).get('/search');
    expect(response.statusCode).toBe(302);
    expect(response.type).toBe('text/plain');
    expect(typeof response.body.latitude).toBe('undefined');
    expect(typeof response.body.longitude).toBe('undefined');
  });
});
