import getData from './getData';
import { confirmedGlobal, deathsGlobal, recoveredGlobal } from './dataUrls';

const getAllGlobalData = async () => {
  const [confirmed, death, recovered] = await Promise.all([
    getData(confirmedGlobal),
    getData(deathsGlobal),
    getData(recoveredGlobal),
  ]);

  return {
    confirmed,
    death,
    recovered,
  };
};

export default getAllGlobalData
