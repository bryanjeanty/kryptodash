// import npm packages
const express = require('express');
const next = require('next');
require('dotenv').config();

// initial variables
const app = express();
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();
const port = process.env.PORT;
const root = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

// setup next server
server.prepare().then(() => {
// let next handle all next related files and events
app.get('/_next/*', (request, response) => { handle(request, response) });
app.get('/static/', (request, response) => { handle(request, response) });

// error handler middleware
app.use((error, request, response, next) => { const { status = 500, message } = request; response.status(status).json(message); });

// set up port to listen on
app.listen(port, (request, response) => { console.log(`Listening on ${root}`) });
});
