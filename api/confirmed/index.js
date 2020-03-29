import { Router } from 'express';
import csvParse from 'csvtojson';
const got = require('got');
const router = Router();

const confirmedGlobal =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

module.exports = async (req, res) => {
  const getConfirmed = async () => {
    const response = await got(confirmedGlobal);
    return await response.body;
  };
  const data = await getConfirmed();
  const dataJSON = await csvParse()
    .fromString(data)
    .then(function (jsonArrayObj) {
      //when parse finished, result will be emitted here.
      return jsonArrayObj;
    });

  if (req.params.country) {
    const countryData = dataJSON.filter(
      (dataItem) =>
        dataItem['Country/Region'].toLowerCase() ===
        req.params.country.toLowerCase()
    );

    res.json(countryData);
  }

  res.json(dataJSON);
};
