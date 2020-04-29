import { getVideoById } from "./getVideoById";

export const getObjectById = (type, id) => {
  const types = {
    video: getVideoById,
  };

  return types[type](id);
};
