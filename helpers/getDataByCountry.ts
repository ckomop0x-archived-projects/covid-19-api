import getData from './getData';
import { confirmedGlobal, deathsGlobal, recoveredGlobal } from './dataUrls';
import filterDataByCountry from './filterDataByCountry';
import {CountryData} from "./types";

const getDataByCountry = async (country: string | undefined) => {
  const globalData: CountryData[][] = await Promise.all([
    getData(confirmedGlobal),
    getData(deathsGlobal),
    getData(recoveredGlobal),
  ]);

  const dates: string[] = [];
  const confirmed: number[] = [];
  const deaths: number[] = [];
  const recovered: number[] = [];
  const confirmedByCountry = filterDataByCountry(globalData[0], country);
  const deathsByCountry = filterDataByCountry(globalData[1], country);
  const recoveredByCountry = filterDataByCountry(globalData[2], country);
  const countryFromData = confirmedByCountry && confirmedByCountry[0]['Country/Region'];

  confirmedByCountry && Object.entries(confirmedByCountry[0])
    .slice(4)
    .forEach(dataEntry => {
      dates.push(dataEntry[0]);
      confirmed.push(Number(dataEntry[1]));
    });

  deathsByCountry && Object.entries(deathsByCountry[0])
    .slice(4)
    .forEach(dataEntry => {
      deaths.push(Number(dataEntry[1]));
    });

  recoveredByCountry && Object.entries(recoveredByCountry[0])
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
