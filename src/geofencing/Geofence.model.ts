import { Schema, model } from "mongoose";
import { IGeofenceAttrs } from "../storage/mongodb/interfaces/Interface.common";

const geofenceSchema = new Schema<IGeofenceAttrs>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  latitude: {
    type: Number,
    required: [true, "Latitude is required"],
  },
  longitude: {
    type: Number,
    required: [true, "Longitude is required"],
  },
  radius: {
    type: Number,
    required: [true, "Radius is required"],
  },
});

const Geofence = model<IGeofenceAttrs>("Geofence", geofenceSchema);

export { Geofence };
