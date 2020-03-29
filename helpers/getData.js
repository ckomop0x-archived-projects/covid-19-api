import csvParse from 'csvtojson';
import got from 'got';

const getData = async (url) => {
  const getConfirmed = async () => {
    const response = await got(url);
    return await response.body;
  };
  const data = await getConfirmed();

  return await csvParse()
    .fromString(data)
    .then(function (jsonArrayObj) {
      //when parse finished, result will be emitted here.
      return jsonArrayObj;
    });
};

export default getData;
