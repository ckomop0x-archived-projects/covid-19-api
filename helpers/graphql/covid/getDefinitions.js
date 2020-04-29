import { getObjectById } from "./getObjectById";
import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { countryType } from "./types/countryType";

export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    return getObjectById(type.toLowerCase(), id)
  },
  (object) => {
    if (object.name) {
      return countryType;
    }

    return null;
  }
)
