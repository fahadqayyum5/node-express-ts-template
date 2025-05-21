import express, { Router } from "express";
import { createGeofence } from "./geofencing.controller";

const router: Router = express.Router();

router.route("/").post(createGeofence);

export default router;
