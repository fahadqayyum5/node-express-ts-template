"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const geofencing_controller_1 = require("./geofencing.controller");
const router = express_1.default.Router();
router.route("/").post(geofencing_controller_1.createGeofence);
exports.default = router;
