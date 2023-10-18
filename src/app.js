import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUIExpress from "swagger-ui-express";

import { __dirname } from "./dirname.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
