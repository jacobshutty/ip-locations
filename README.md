# IP Address Location Search

This is a basic node.js app for searching for a given IP address using the [GeoLite2 Geolocation database](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data).

It consists of two parts:

- Server - Node.js & Express
- Client - Basic HTML & JS

## Setup

To run the application locally, you can either run the server standalone, or with Docker.

### Standalone

1. Install [Node.js](https://nodejs.org/en/)
2. Run `npm run nodemon` in root of project

This method uses [nodemon](https://nodemon.io/) to enable hot reload for changes to the server, but requires a page refresh for changes to the client.

### With Docker Compose

1. Install [Docker](https://www.docker.com/get-started/)
2. Run `npm start` to run the app in development mode with docker compose.

This method also enables hot reload for the server, and will show changes to the client after a page refresh.

## Production

The production build of the app is created as a Docker image using `npm run build` to build the image, then `npm run prod` to run it in production mode.

You can then run `npm run stop` to stop the running production container, or this can be done through docker desktop.
