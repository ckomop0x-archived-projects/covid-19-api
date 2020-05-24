export const getCountryTotalData = (data, country) => {
  let casesAmount = 0;

  const allDataForCountry = data.filter(
    item => item['Country/Region'].toLowerCase() === country.toLowerCase()
  );
  allDataForCountry.forEach(countryData => {
    const countryValues = Object.values(countryData);
    const dataLength = countryValues.length;

    casesAmount += Number(countryValues[dataLength - 1]);
  });

  return casesAmount;
};
