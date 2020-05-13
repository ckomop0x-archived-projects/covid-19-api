import csvParse from 'csvtojson';
import got from 'got';

const getData = async url => {
  const getDataFromUrl = async () => {
    const response = await got(url);
    return response.body;
  };
  const data = await getDataFromUrl();

  return csvParse()
    .fromString(data)
    .then(jsonArrayObj => {
      // when parse finished, result will be emitted here.
      return jsonArrayObj;
    });
};

export default getData;
