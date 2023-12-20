import { useQuery } from '@tanstack/react-query';
import { Grid, CardHeader, Typography, Icon, Paper } from '@mui/material';

import { WbSunny, FilterDrama, Thunderstorm } from '@mui/icons-material';

import { fetchWeatherInfo } from '../../api/fetchWeatherInfo';

import { Loader } from '../../Layout/Loader';

type props = {
  lat: number;
  lng: number;
};

const WeatherDetails = (props: props) => {
  const { lat, lng } = props;
  const { data, error, isLoading } = useQuery({
    queryKey: ['weatherDetails', { lat, lng }],
    queryFn: async () => await fetchWeatherInfo(lat, lng),
    staleTime: Infinity,
  });
  console.log(data);
  if (isLoading) {
    return <Loader show={isLoading} />;
  }

  if (error) {
    return <div>{error.stack}</div>;
  }

  const weatherDetails = data?.weather[0]?.main?.toLowerCase();

  const isCloudy = weatherDetails?.includes('cloud');

  const isClear = weatherDetails?.includes('clear');

  const isRainy = weatherDetails?.includes('rain');

  return (
    <Paper elevation={3}>
      <CardHeader title='Weather Details' />

      {/* <i className='uil uil-wind' /> {data?.wind?.speed} kmph
          <Typography >Humidity : {data?.main?.humidity}%</Typography>
          <Typography >Pressure : {data?.main?.pressure} mmHg</Typography>
          <Typography >{data?.weather[0]?.description}</Typography> */}

      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={4}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <Icon fontSize='large'>
                {isCloudy && <FilterDrama />}
                {isClear && <WbSunny />}
                {isRainy && <Thunderstorm />}
              </Icon>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2'>
                {' '}
                {data?.weather[0]?.main}{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <Typography variant='h4'>{data?.main?.temp}° </Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2'>
                {data?.main?.temp_min}/{data?.main?.temp_max}°
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid item>
              <Typography variant='h4'>{data?.main?.humidity}%</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2'>
                <i className='uil uil-wind' />
                {data?.wind?.speed} kmph
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WeatherDetails;
