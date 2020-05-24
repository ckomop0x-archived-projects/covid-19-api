import getData from './getData';
import { confirmedGlobal, deathsGlobal, recoveredGlobal } from './dataUrls';
import filterDataByCountry from './filterDataByCountry';

const getDataByCountry = async country => {
  const globalData = await Promise.all([
    getData(confirmedGlobal),
    getData(deathsGlobal),
    getData(recoveredGlobal),
  ]);

  const dates = [];
  const confirmed = [];
  const deaths = [];
  const recovered = [];
  const confirmedByCountry = filterDataByCountry(globalData[0], country);
  const deathsByCountry = filterDataByCountry(globalData[1], country);
  const recoveredByCountry = filterDataByCountry(globalData[2], country);
  const countryFromData =
    (confirmedByCountry &&
      confirmedByCountry[0] &&
      confirmedByCountry[0]['Country/Region']) ||
    '';

  confirmedByCountry &&
    confirmedByCountry[0] &&
    Object.entries(confirmedByCountry[0])
      .slice(4)
      .forEach(dataEntry => {
        dates.push(dataEntry[0]);
        confirmed.push(Number(dataEntry[1]));
      });

  deathsByCountry &&
    deathsByCountry[0] &&
    Object.entries(deathsByCountry[0])
      .slice(4)
      .forEach(dataEntry => {
        deaths.push(Number(dataEntry[1]));
      });

  recoveredByCountry &&
    recoveredByCountry[0] &&
    Object.entries(recoveredByCountry[0])
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
