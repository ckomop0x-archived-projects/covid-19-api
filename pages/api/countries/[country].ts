import { getDataByCountry } from '../../../helpers';
import { NextApiRequest, NextApiResponse } from 'next';
import { getCountriesList } from '../../../helpers/getCountriesList';

const countryPage = async (req: NextApiRequest, response: NextApiResponse) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  const error = {
    error: { message: `No data found for ${req.query.country}` },
  };

  if (req?.query?.country && !Array.isArray(req?.query?.country)) {
    let country = '';
    const countryId = Number.parseInt(req?.query?.country);

    if (countryId || countryId === 0) {
      const allCountries: string[] = await getCountriesList();
      country = allCountries[countryId];
    } else {
      country = req.query.country;
    }

    const dataByCountry = await getDataByCountry(country);

    if (dataByCountry.dates && dataByCountry.dates[0]) {
      return response.json(dataByCountry);
    }
    response.status(500);
    return response.json(error);
  }
  response.status(500);
  return response.json(error);
};

export default countryPage;
