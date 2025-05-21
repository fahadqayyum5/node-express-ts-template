import { Request, Response, NextFunction } from "express";
import { Geofence } from "./Geofence.model";
import { validateGeofence } from "./geofencing.service";
import { IGeofenceAttrs } from "../storage/mongodb/interfaces/Interface.common";

const createGeofence = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = validateGeofence(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message.replace(/['"]+/g, ""),
      });
    }

    const { name, latitude, longitude, radius } = req.body as IGeofenceAttrs;

    const geofence = await Geofence.create({
      name,
      latitude,
      longitude,
      radius,
    });

    return res.status(201).json({ success: true, data: geofence });
  } catch (error) {
    next(error);
  }
};

export { createGeofence };
