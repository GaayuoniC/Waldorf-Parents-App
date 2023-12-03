import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import {
  adminGetCustomers,
  updateProfile,
  getProfile,
  getAppointmentsByCustomer,
  adminGetAppointments,
  createAppointment,
} from "./handlers/customers.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Service API",
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
  return res.json({ message: "car-service-api" });
});

/**
 * @swagger
 *
 * /profile:
 *   get:
 *     produces:
 *       - application/json
 *     description: Get the profile of the currently logged in user
 *     responses:
 *       '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: string
 *                    description: The logged in user's Clerk ID
 *                  email:
 *                    type: string
 *                    description: The logged in user's email address
 *                  name:
 *                    type: string
 *                    description: The logged in user's name
 *                  vehicleId:
 *                    type: string
 *                    description: The logged in user's vehicle ID
 *                  vehicleMake:
 *                    type: string
 *                    description: The logged in user's vehicle model
 *       '400':
 *          description: Missing user id
 *       '500':
 *          description: Internal Server Error
 */
app.get("/profile", ClerkExpressRequireAuth(), getProfile);

/**
 * @swagger
 *
 * /profile:
 *   patch:
 *     produces:
 *       - application/json
 *     description: Update the profile of the currently logged in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The logged in user's name
 *               vehicleId:
 *                 type: string
 *                 description: The logged in user's vehicle ID
 *               vehicleMake:
 *                 type: string
 *                 description: The logged in user's vehicle make
 *     responses:
 *       '200':
 *          description: Success
 *       '400':
 *          description: Missing user id
 *       '500':
 *          description: Internal Server Error
 */
app.patch("/profile", ClerkExpressRequireAuth(), updateProfile);

/**
 * @swagger
 *
 * /profile/appointments:
 *   get:
 *     produces:
 *       - application/json
 *     description: Appointments for the currently logged in user
 *     responses:
 *       '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  id:
 *                    type: number
 *                    description: Appointment ID
 *                  service:
 *                    type: string
 *                    description: The service requested (e.g. oil change)
 *                  startTime:
 *                    type: string
 *                    description: The start time of the appointment
 *       '400':
 *          description: Missing user id
 *       '500':
 *          description: Internal Server Error
 */
app.get(
  "/profile/appointments",
  ClerkExpressRequireAuth(),
  getAppointmentsByCustomer
);
/**
 * @swagger
 *
 * /profile/add-appointment:
 *   post:
 *     produces:
 *       - application/json
 *     description: Adds an appointment for the currently logged in user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               service:
 *                 type: string
 *                 description: The requested service (e.g. oil change)
 *               startTime:
 *                 type: Date
 *                 description: The start time of the appointment
 *     responses:
 *       '200':
 *          description: Success
 *       '400':
 *          description: Missing user id or service or startTime
 *       '500':
 *          description: Internal Server Error
 */
app.post(
  "/profile/add-appointment",
  (req, res, next) => {
    console.log(req.headers);
    next();
  },
  ClerkExpressRequireAuth(),
  createAppointment
);

app.get("/admin/customers", ClerkExpressRequireAuth(), adminGetCustomers);
/**
 * @swagger
 *
 * /admin/appointments:
 *   get:
 *     produces:
 *       - application/json
 *     description: All appointments for all customers
 *     responses:
 *       '200':
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                    description: Appointment ID
 *                  service:
 *                    type: string
 *                    description: The service requested (e.g. oil change)
 *                  startTime:
 *                    type: string
 *                    description: The start time of the appointment
 *       '400':
 *          description: Missing user id
 *       '500':
 *          description: Internal Server Error
 */
app.get(
  "/admin/appointments",
  (req, res, next) => {
    console.log(req.headers);
    next();
  },
  // ClerkExpressRequireAuth(),
  adminGetAppointments
);

app.listen(port, () => {
  console.log(`car-service-api running on port ${port}`);
});
