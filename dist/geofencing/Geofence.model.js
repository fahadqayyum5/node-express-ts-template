"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geofence = void 0;
const mongoose_1 = require("mongoose");
const geofenceSchema = new mongoose_1.Schema({
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
const Geofence = (0, mongoose_1.model)("Geofence", geofenceSchema);
exports.Geofence = Geofence;
