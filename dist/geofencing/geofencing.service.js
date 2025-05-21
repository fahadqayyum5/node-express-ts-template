"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGeofence = void 0;
const joi_1 = __importDefault(require("joi"));
const validateGeofence = (geofence) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        latitude: joi_1.default.number().required(),
        longitude: joi_1.default.number().required(),
        radius: joi_1.default.number().required(),
    });
    return schema.validate(geofence);
};
exports.validateGeofence = validateGeofence;
