const getConfirmedCountries = async data => {
  const uniqueCountries: Set<string> = new Set();

  data.confirmed
    .filter((item: string) => item['Country/Region'] !== '')
    .forEach((item: string) => {
      uniqueCountries.add(item['Country/Region']);
    });

  return uniqueCountries;
};

export default getConfirmedCountries;
