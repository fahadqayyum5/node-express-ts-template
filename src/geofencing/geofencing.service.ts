import Joi, { ValidationResult } from "joi";
import { IGeofenceAttrs } from "../storage/mongodb/interfaces/Interface.common";

const validateGeofence = (geofence: IGeofenceAttrs): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    radius: Joi.number().required(),
  });
  return schema.validate(geofence);
};

export { validateGeofence };
