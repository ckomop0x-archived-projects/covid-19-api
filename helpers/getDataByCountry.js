import getData from './getData';
import { confirmedGlobal, deathsGlobal, recoveredGlobal } from './dataUrls';
import filterDataByCountry from './filterDataByCountry';

const getDataByCountry = async country => {
  const globalData = await Promise.all([
    getData(confirmedGlobal),
    getData(deathsGlobal),
    getData(recoveredGlobal),
  ]);
  const countryConfirmedData = filterDataByCountry(globalData[0], country)[0];
  const countryFromData = countryConfirmedData['Country/Region'];
  const dates = [];
  const confirmed = [];
  const deaths = [];
  const recovered = [];

  Object.entries(filterDataByCountry(globalData[0], country)[0])
    .slice(4)
    .forEach(dataEntry => {
      dates.push(dataEntry[0]);
      confirmed.push(Number(dataEntry[1]));
    });

  Object.entries(filterDataByCountry(globalData[1], country)[0])
    .slice(4)
    .forEach(dataEntry => {
      deaths.push(Number(dataEntry[1]));
    });

  Object.entries(filterDataByCountry(globalData[2], country)[0])
    .slice(4)
    .forEach(dataEntry => {
      recovered.push(Number(dataEntry[1]));
    });

  return {
    country: countryFromData,
    dates,
    confirmed,
    deaths,
    recovered,
  };
};

export default getDataByCountry;
