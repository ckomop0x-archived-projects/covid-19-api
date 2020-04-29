import getAllGlobalData from './getAllGlobalData';
import { getCountryTotalData } from './getCountryTotalData';

export const getCountries = async () => {
  const uniqueCountries = new Set();
  const allData = await getAllGlobalData();
  let countries = [];

  // get confirmed countries
  allData.confirmed
    .filter(item => item['Country/Region'] !== '')
    .forEach(item => {
      uniqueCountries.add(item['Country/Region']);
    });

  uniqueCountries.forEach(uniqueCountry => {
    countries.push({
      id: uniqueCountry,
      name: uniqueCountry,
      totalConfirmed: getCountryTotalData(allData.confirmed, uniqueCountry),
      totalDeaths: getCountryTotalData(allData.death, uniqueCountry),
      totalRecovered: getCountryTotalData(allData.recovered, uniqueCountry),
      // confirmed: {
      //   date: '213123',
      //   amount: 123
      // }
    });
  });

  return countries;
};
