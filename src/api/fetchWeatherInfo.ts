import { get } from './config/restApis';

export const fetchWeatherInfo = async (lat: number, lng: number) => {
  const data = await get({
    url: `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=445268ff962de0ad733bab6a1f97a94f`,
  });
  return data;
};
