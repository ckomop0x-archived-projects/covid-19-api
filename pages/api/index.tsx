import { getAllGlobalData } from '../../helpers';

const apiPage = async (req, res) => {
  const allGlobalData = await getAllGlobalData();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  await res.json(allGlobalData);
};

export default apiPage;

// export default (req, res) => {
//   res.status(200).json({ text: 'Hello' });
// };
