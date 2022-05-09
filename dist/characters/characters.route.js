"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const characters_controller_1 = require("./characters.controller");
const router = express_1.default.Router();
//Create new Character
router.route('/').post(characters_controller_1.createCharacter);
exports.default = router;
