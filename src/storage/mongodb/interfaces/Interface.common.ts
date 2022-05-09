import { Types } from "mongoose";

// interface representing a Character document in MongoDB.
interface ICharacterAttrs {
  name: string;
  specie: string;
  characterCollection: {
    name: string;
    symbol: string;
  };
  totalNft: number;
}

export { ICharacterAttrs };
