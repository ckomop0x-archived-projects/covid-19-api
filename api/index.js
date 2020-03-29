import { getAllGlobalData } from '../helpers';

const apiPage = async (req, res) => {
  const allGlobalData = await getAllGlobalData();

  res.json(allGlobalData);
};

export default apiPage;
