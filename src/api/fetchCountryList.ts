import { get } from './config/restApis';

export const fetchCountryList = async () => {
  const data = await get({
    url: 'https://restcountries.com/v3.1/all',
  });
  return data;
};
