import { Schema, model, connect } from "mongoose";
import Joi, { ValidationResult } from "joi";
import { ICharacterAttrs } from "../storage/mongodb/interfaces/Interface.common";

const characterSchema = new Schema<ICharacterAttrs>({
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

const Character = model<ICharacterAttrs>("Character", characterSchema);

export { Character };
