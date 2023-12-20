import { get } from './config/restApis';

const API_KEY = '298eb75776a89f3bd444521f7d443053';

export const fetchWeatherInfo = async (lat: number, lng: number) => {
  const data = await get({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`,
  });

  return data;
};
