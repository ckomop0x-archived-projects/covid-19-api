export const baseUrl = (dataType) =>
  `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_${dataType}_global.csv`
export const confirmedGlobal = baseUrl('confirmed');
export const deathsGlobal = baseUrl('deaths');
export const recoveredGlobal = baseUrl('recovered');
