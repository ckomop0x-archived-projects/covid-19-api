import csvParse from 'csvtojson';
import got from 'got';

const getData = async url => {
  const getDataFromUrl = async () => {
    const response = await got(url);
    return response.body;
  };
  const data = await getDataFromUrl();

  return await csvParse()
    .fromString(data)
    .then(function (jsonArrayObj) {
      //when parse finished, result will be emitted here.
      return jsonArrayObj;
    });
};

export default getData;
