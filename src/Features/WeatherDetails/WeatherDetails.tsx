import { useQuery } from '@tanstack/react-query';
import { fetchWeatherInfo } from '../../api/fetchWeatherInfo';

type props = {
  lat: number;
  lng: number;
};

const WeatherDetails = (props: props) => {
  const { lat, lng } = props;
  const { data, isLoading } = useQuery({
    queryKey: ['weatherInfo', { lat, lng }],
    queryFn: () => {
      fetchWeatherInfo(lat, lng);
    },
  });
  console.log(data, isLoading);
  return <div>WeatherDetails</div>;
};

export default WeatherDetails;
