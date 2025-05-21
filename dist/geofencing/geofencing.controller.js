"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeofence = void 0;
const Geofence_model_1 = require("./Geofence.model");
const geofencing_service_1 = require("./geofencing.service");
const createGeofence = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, geofencing_service_1.validateGeofence)(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                error: error.details[0].message.replace(/['"]+/g, ""),
            });
        }
        const { name, latitude, longitude, radius } = req.body;
        const geofence = yield Geofence_model_1.Geofence.create({
            name,
            latitude,
            longitude,
            radius,
        });
        return res.status(201).json({ success: true, data: geofence });
    }
    catch (error) {
        next(error);
    }
});
exports.createGeofence = createGeofence;
