const filterDataByCountry = (data, country) =>
  data.filter(
    dataItem =>
      dataItem['Country/Region'].toLowerCase() === country.toLowerCase() &&
      dataItem['Province/State'].toLowerCase() === ''
  );

export default filterDataByCountry;
