import { getCountries } from "../../getCountries";

export const getCountryById = async id => {
  const countries = await getCountries();

  new Promise(resolve => {
    const [country] = countries.filter(country => country.id === id);

    resolve(country);
  });
}
