import { getCountries } from "../../getCountries";

export const getCountryByName = async name => {
  const countries = await getCountries();

  const [country] = countries.filter(country => country.name.toLowerCase() === name.toLowerCase());

  return country;
}
