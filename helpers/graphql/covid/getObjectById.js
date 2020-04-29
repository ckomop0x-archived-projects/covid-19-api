import { getCountryById } from "./getCountryById";

export const getObjectById = (type, id) => {
  const types = {
    country: getCountryById,
  };

  return types[type](id);
};
