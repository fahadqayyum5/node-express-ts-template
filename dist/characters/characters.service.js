"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCharacter = void 0;
const joi_1 = __importDefault(require("joi"));
//Character Input Validatotion.
const validateCharacter = (character) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        specie: joi_1.default.string().required(),
        characterCollection: joi_1.default.object().pattern(/.*/, [
            joi_1.default.string().required(),
            joi_1.default.string().required(),
        ]),
    });
    const result = schema.validate(character);
    return result;
};
exports.validateCharacter = validateCharacter;
