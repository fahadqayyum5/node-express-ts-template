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

// interface representing a Geofence document in MongoDB.
interface IGeofenceAttrs {
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
}

export { ICharacterAttrs, IGeofenceAttrs };
