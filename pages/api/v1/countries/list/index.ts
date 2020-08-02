import { getCountriesList } from '../../../../../helpers/getCountriesList';
import { NextApiResponse, NextApiRequest } from 'next';

const apiPage = async (req: NextApiRequest, res: NextApiResponse) => {
  const allCountries = await getCountriesList();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  await res.json({ allCountries: allCountries });
};

export default apiPage;
