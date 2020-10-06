import { getCountriesList } from '../../../../helpers/getCountriesList';
import { NextApiResponse, NextApiRequest } from 'next';

const countriesList = async (
  _request: NextApiRequest,
  response: NextApiResponse
) => {
  const allCountries: string[] = await getCountriesList();
  const countries = allCountries.map((country, index) => ({
    name: country,
    id: index,
  }));
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  await response.json(countries);
};

export default countriesList;
