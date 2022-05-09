"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const mongoose_1 = require("mongoose");
const characterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    specie: {
        type: String,
        required: [true, "Specie is required"],
    },
    characterCollection: {
        _id: false,
        type: {
            name: {
                type: String,
                required: [true, "Name is required"],
            },
            symbol: {
                type: String,
                required: [true, "Symbol is required"],
            },
        },
        required: [true, "Collection is required"],
    },
    totalNft: {
        type: Number,
        default: 0,
    },
});
const Character = (0, mongoose_1.model)("Character", characterSchema);
exports.Character = Character;
