import getData from './getData';
const confirmedGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
const deathGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
const recoveredGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';

const getAllGlobalData = async () => {
  const [confirmed, death, recovered] = await Promise.all([
    getData(confirmedGlobal),
    getData(deathGlobal),
    getData(recoveredGlobal),
  ]);

  return {
    confirmed,
    death,
    recovered,
  };
};

export default getAllGlobalData;
