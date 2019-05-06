// load npm packages
const express = require('express');
const session = require('express-session');
const next = require('next');
const mongoose = require('mongoose');
require('dotenv').config();

// load files
const { mongooseConfig } = require('./config/mongoose-config.js');
const { sessionConfig } = require('./config/session-config.js');

// connect to database
mongoose.connect(process.env.MONGO_URI, mongooseConfig).then(() => console.log('db connected')).catch(error => console.log(`db connection error: ${error.message}`));

// initial variables
const app = express();
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev });
const handle = server.getRequestHandler();
const port = process.env.PORT;
const root = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

// setup next server
server.prepare().then(() => {
// setup middleware
app.use(session(sessionConfig));

// let next handle all next related files and events
app.get('/_next/*', (request, response) => { handle(request, response) });
app.get('/static/', (request, response) => { handle(request, response) });

// error handler middleware
app.use((error, request, response, next) => { const { status = 500, message } = request; response.status(status).json(message); });

// set up port to listen on
app.listen(port, (request, response) => { console.log(`Listening on ${root}`) });
});
