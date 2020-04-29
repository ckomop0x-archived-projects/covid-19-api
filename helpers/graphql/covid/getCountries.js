// import getAllGlobalData from '../../getAllGlobalData';
import { getCountries as countries } from "../../getCountries";

export const getCountries = async () => {
  const countriesList = await countries();

  return countriesList;
};
