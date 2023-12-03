import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import {
  getOffers,
  getRequests,
  createOffer,
  createRequest,
  acceptRequest,
} from "./handlers/offers.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Waldorf Helper API",
      version: "1.0.0",
    },
  },
  apis: ["./*.js"],
});

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  return res.json({ message: "waldorf-helper-api" });
});

app.get("/offers", getOffers);
app.get("/requests", getRequests);
app.post("/requests/:id/accept", ClerkExpressRequireAuth(), acceptRequest);
app.post("/offers", ClerkExpressRequireAuth(), createOffer);
app.post("/requests", ClerkExpressRequireAuth(), createRequest);

app.listen(port, () => {
  console.log(`car-service-api running on port ${port}`);
});
