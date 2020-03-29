import getData from './getData';
const confirmedGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
const deathGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
const recoveredGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';

const getDataByCountry = async country => {
  const confirmed = await getData(confirmedGlobal);
  const death = await getData(deathGlobal);
  const recovered = await getData(recoveredGlobal);
  const confirmedByCountry = confirmed.filter(
    confirmedItem =>
      confirmedItem['Country/Region'].toLowerCase() === country.toLowerCase() &&
      confirmedItem['Province/State'].toLowerCase() === ''
  );
  const recoveredByCountry = recovered.filter(
    recoveredItem =>
      recoveredItem['Country/Region'].toLowerCase() === country.toLowerCase() &&
      recoveredItem['Province/State'].toLowerCase() === ''
  );
  const deathByCountry = death.filter(
    deathItem =>
      deathItem['Country/Region'].toLowerCase() === country.toLowerCase() &&
      deathItem['Province/State'].toLowerCase() === ''
  );

  return {
    country,
    confirmed: Object.entries(confirmedByCountry[0]).slice(4) || [],
    death: Object.entries(deathByCountry[0]).slice(4) || [],
    recovered: Object.entries(recoveredByCountry[0]).slice(4) || [],
  };
};

export default getDataByCountry;
