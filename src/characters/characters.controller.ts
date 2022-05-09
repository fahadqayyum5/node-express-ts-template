import { Character } from "./Character.model";
import { validateCharacter } from "./characters.service";

import { ICharacterAttrs } from "../storage/mongodb/interfaces/Interface.common";
import { ValidationError } from "joi";

import express, {
  Application,
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from "express";
``;

// @desc      Create new Character
// @route     POST /api/characters
// @access    Public
const createCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = validateCharacter(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message.replace(/['"]+/g, ""),
      });
    }

    const { name, characterCollection, specie } = req.body as ICharacterAttrs;
    //validate if character already exists.
    let character = await Character.findOne({ name });
    if (character) {
      return res.status(400).json({
        success: false,
        error: `Character with name ${name} already exists`,
      });
    }

    character = new Character({
      name,
      characterCollection,
      specie,
    });

    const result = await Character.create(character);

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
  } catch (error) {
    next(error);
  }
};

export { createCharacter };
