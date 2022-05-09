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
exports.createCharacter = void 0;
const Character_model_1 = require("./Character.model");
const characters_service_1 = require("./characters.service");
``;
// @desc      Create new Character
// @route     POST /api/characters
// @access    Public
const createCharacter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = (0, characters_service_1.validateCharacter)(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                error: error.details[0].message.replace(/['"]+/g, ""),
            });
        }
        const { name, characterCollection, specie } = req.body;
        //validate if character already exists.
        let character = yield Character_model_1.Character.findOne({ name });
        if (character) {
            return res.status(400).json({
                success: false,
                error: `Character with name ${name} already exists`,
            });
        }
        character = new Character_model_1.Character({
            name,
            characterCollection,
            specie,
        });
        const result = yield Character_model_1.Character.create(character);
        if (!result) {
            return res.status(500).json({
                success: false,
                error: "Internal Server Error",
            });
        }
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createCharacter = createCharacter;
