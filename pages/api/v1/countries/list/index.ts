import { getCountriesList } from '../../../../../helpers/getCountriesList';
import { NextApiResponse, NextApiRequest } from 'next';

const countriesList = async (req: NextApiRequest, res: NextApiResponse) => {
  const allCountries: string[] = await getCountriesList();
  const countries = allCountries.map(country => ({
    name: country,
  }));
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  await res.json(countries);
};

export default countriesList;
