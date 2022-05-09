import { Character } from "./Character.model";

import Joi, { ValidationResult } from "joi";
import { ICharacterAttrs } from "../storage/mongodb/interfaces/Interface.common";
import { Types } from "mongoose";
//Character Input Validatotion.
const validateCharacter = (character: ICharacterAttrs): ValidationResult => {
  const schema = Joi.object({
    name: Joi.string().required(),
    specie: Joi.string().required(),
    characterCollection: Joi.object().pattern(/.*/, [
      Joi.string().required(),
      Joi.string().required(),
    ]),
  });
  const result: ValidationResult = schema.validate(character);
  return result;
};




export {
    validateCharacter
};