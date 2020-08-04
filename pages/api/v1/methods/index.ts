import { NextApiResponse, NextApiRequest } from 'next';

const apiPage = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  await res.json({
    '/api/v1/countries/list': 'List of all countries',
  });
};

export default apiPage;
