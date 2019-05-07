// load npm packages
const express = require("express");
const session = require("express-session");
const next = require("next");
const mongoose = require("mongoose");
const validator = require("express-validator");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();

// load config files
const { mongooseConfig } = require("./config/mongoose-config.js");
const { sessionConfig } = require("./config/session-config.js");
const { passport } = require("./config/passport-config.js");

// load routers
const userRouter = require("./routes/user");
const sessionRouter = require("./routes/session");

// connect to database
mongoose
  .connect(process.env.MONGO_URI, mongooseConfig)
  .then(() => console.log("db connected"))
  .catch(error => console.log(`db connection error: ${error.message}`));

// initial variables
const app = express();
const dev = process.env.NODE_ENV !== "production";
const server = next({ dev });
const handle = server.getRequestHandler();
const port = process.env.PORT;
const root = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

// setup next server
server.prepare().then(() => {
  // setup production environment conditions
  if (!dev) {
    app.use(helmet());
    app.use(compression());
    app.set("trust proxy", 1);
    sessionConfig.cookie.secure = true;
  }

  // setup middleware
  app.use(express.json());
  app.use(morgan("dev", { skip: request => request.url.includes("_next") }));
  app.use(validator());
  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());

  // setup custom middleware
  app.use((request, response, next) => {
    response.locals.user = request.user || null;
    next();
  });

  // setup routes
  app.use("/api/users", userRouter);
  app.use("/api/session", sessionRouter);
  //app.use('/api/emails', emailRouter);

  // setup custom routes
  app.get("/dashboard/user/:id", (request, response) => {
    return server.render(request, response, "/dashboard", {
      id: request.params.id
    });
  });

  app.get("/settings/user/:id", (request, response) => {
    return server.render(request, response, "/settings", {
      id: request.params.id
    });
  });

  // let next handle all next related files and events
  app.get("/_next/*", (request, response) => {
    handle(request, response);
  });
  app.get("/static/", (request, response) => {
    handle(request, response);
  });
  app.get("*", (request, response) => {
    handle(request, response);
  });

  // setup error handler middleware
  app.use((error, request, response, next) => {
    const { status = 500, message } = request;
    response.status(status).json(message);
  });

  // set up port to listen on
  app.listen(port, (request, response) => {
    console.log(`Listening on ${root}`);
  });
});
