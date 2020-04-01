import getData from './getData';
import {confirmedGlobal, deathGlobal, recoveredGlobal} from "./dataUrls";

const getAllGlobalData = async () => {
  const [confirmed, death, recovered] = await Promise.all([
    getData(confirmedGlobal),
    getData(deathGlobal),
    getData(recoveredGlobal),
  ]);

  return {
    confirmed,
    death,
    recovered,
  };
};

export default getAllGlobalData;
