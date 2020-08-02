import getAllGlobalData from './getAllGlobalData';
import { getConfirmedCountries } from './countries';

export const getCountriesList = async () => {
  const allData = await getAllGlobalData();
  const uniqueCountries = await getConfirmedCountries(allData);
  let countries = [];

  uniqueCountries.forEach(uniqueCountry => {
    countries.push(uniqueCountry);
  });

  return countries;
};
