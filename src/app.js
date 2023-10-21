import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUIExpress from "swagger-ui-express";
import morgan from "morgan";
import database from "./config/mongo.js";
import { __dirname } from "./dirname.js";
import config from "./config/config.js";
import { apiRouter } from "./routes/routes.js";

const app = express();

const port = config.port;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
apiRouter(app);

// database connection
database.connect();

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "CauseMatch",
      description: "CauseMatch API Documentation",
    },
  },
  apis: [`${__dirname}/docs/**/*.yaml`],
};

const specs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUIExpress.serve, swaggerUIExpress.setup(specs));

app.listen(port, (req, res) => {
  console.log("Listening on port 8080");
});
