import getData from './getData';
const confirmedGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
const deathGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
const recoveredGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';

const getDataByCountry = async country => {
  const globalData = await Promise.all([getData(confirmedGlobal), getData(deathGlobal), getData(recoveredGlobal)]);
  const filterDataByCountry = (data, country) => (
    data.filter(
      dataItem =>
        dataItem['Country/Region'].toLowerCase() === country.toLowerCase() &&
        dataItem['Province/State'].toLowerCase() === ''
  ));
  const confirmed = Object.entries(filterDataByCountry(globalData[0], country)[0]).slice(4) || [];
  const death = Object.entries(filterDataByCountry(globalData[1], country)[0]).slice(4);
  const recovered = Object.entries(filterDataByCountry(globalData[2], country)[0]).slice(4);

  return {
    country,
    confirmed,
    death,
    recovered,
  };
};

export default getDataByCountry;
