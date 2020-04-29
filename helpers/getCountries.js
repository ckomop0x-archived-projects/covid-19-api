import getAllGlobalData from "./getAllGlobalData";

export const getCountries = async () => {
  const uniqueCountries = new Set();
  const allData = await getAllGlobalData();
  let countries = []

  allData.confirmed
    .filter(item => {
      console.log(item['Country/Region'])
      return item['Country/Region'] !== ''
    })
    .forEach(item => uniqueCountries.add(item['Country/Region']))

  const getDataByCountry = (data, country) => {
    return data.filter(item => item['Country/Region'] === country )
  }

  uniqueCountries.forEach(uniqueCountry => {
    const dates = [];
    const confirmed = [];
    const confirmedCases = getDataByCountry(allData.confirmed, uniqueCountry);
    Object.entries(confirmedCases[0]).slice(4)
      .forEach(dataEntry => {
        dates.push(dataEntry[0]);
        confirmed.push(Number(dataEntry[1]));
      });

    // console.log('===>', confirmed)

    countries = [...countries, {
      id: uniqueCountry,
      title: uniqueCountry,
      totalConfirmed: confirmed[confirmed.length - 1],
      totalDeaths: 0,
      totalRecovered: 0,
      // confirmed: {
      //   date: '213123',
      //   amount: 123
      // }
      // confirmed: allData.confirmed.filter(item => item['Country/Region'] === uniqueCountry ),
      // death: allData.death.filter(item => item['Country/Region'] === uniqueCountry ),
      // recovered: allData.recovered.filter(item => item['Country/Region'] === uniqueCountry ),
    }]
  })



  return countries
}

