import getAllGlobalData from './getAllGlobalData';
import { getCountryTotalData } from './getCountryTotalData';
import { getConfirmedCountries } from './countries';

export const getCountries = async () => {
  const allData = await getAllGlobalData();
  const uniqueCountries = await getConfirmedCountries(allData);
  let countries = [];

  uniqueCountries.forEach(uniqueCountry => {
    countries.push({
      id: uniqueCountry,
      name: uniqueCountry,
      totalConfirmed: getCountryTotalData(allData.confirmed, uniqueCountry),
      totalDeaths: getCountryTotalData(allData.death, uniqueCountry),
      totalRecovered: getCountryTotalData(allData.recovered, uniqueCountry),
    });
  });

  return countries;
};
