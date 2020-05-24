const getConfirmedCountries = async data => {
  const uniqueCountries = new Set();

  data.confirmed
    .filter(item => item['Country/Region'] !== '')
    .forEach(item => {
      uniqueCountries.add(item['Country/Region']);
    });

  return uniqueCountries;
};

export default getConfirmedCountries;
