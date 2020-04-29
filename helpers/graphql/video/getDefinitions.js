import { getObjectById } from "./getObjectById";
import { fromGlobalId, nodeDefinitions } from "graphql-relay";
import { videoType } from "./types";

export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    return getObjectById(type.toLowerCase(), id)
  },
  (object) => {
    if (object.title) {
      return videoType;
    }

    return null;
  }
)
