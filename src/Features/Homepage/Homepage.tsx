/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Autocomplete, TextField, Grid, Button } from '@mui/material';

import { Loader } from '../../Layout/Loader';

import { fetchCountryList } from '../../api/fetchCountryList';

import CountryDetails from '../CountryDetails/CountryDetails';

import WeatherDetails from '../WeatherDetails/WeatherDetails';

const Homepage = () => {
  const [countryName, setCountryName] = useState<string | null>('');
  const [countryDetails, setCountryDetails] = useState<any>();
  const [showWeather, setShowWeather] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['countryList'],
    queryFn: fetchCountryList,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <Loader show={isLoading} />;
  }

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      padding={10}
      spacing={1}
    >
      <Grid
        item
        xs={countryDetails ? 10 : 12}
        marginTop={countryDetails ? '0%' : '20%'}
      >
        <Autocomplete
          disablePortal
          options={data.map((item: any) => item?.name?.common)}
          value={countryName}
          onChange={(event, newValue) => {
            setCountryName(newValue);
            setCountryDetails(
              data.find((item: any) => item?.name?.common === newValue)
            );
            setShowWeather(false);
          }}
          // style={{ backgroundColor: '#C6ECFF' }}
          renderInput={(params) => <TextField {...params} label='Country' />}
        />
      </Grid>

      {countryDetails && (
        <>
          <Grid item xs={2}>
            <Button
              variant='contained'
              onClick={() => setShowWeather(true)}
              disabled={showWeather}
              size='large'
            >
              Weather details
            </Button>
          </Grid>
          <Grid item xs={12}>
            <CountryDetails details={countryDetails} />
          </Grid>
        </>
      )}
      {showWeather && (
        <Grid item xs={6}>
          <WeatherDetails
            lat={countryDetails.latlng[0]}
            lng={countryDetails.latlng[1]}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Homepage;
