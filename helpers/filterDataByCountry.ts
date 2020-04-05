import { CountryData } from './types';

const filterDataByCountry = (
  data: CountryData[],
  country: string | undefined
): CountryData[] | undefined => {
  return data.filter(
    dataItem =>
      dataItem['Country/Region'].toLowerCase() === country?.toLowerCase() &&
      dataItem['Province/State'].toLowerCase() === ''
  );
};

export default filterDataByCountry;
