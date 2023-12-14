/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Autocomplete, TextField, Grid, Button } from '@mui/material';

import { Loader } from '../../Layout/Loader';

import { fetchCountryList } from '../../api/fetchCountryList';

import CountryDetails from '../CountryDetails/CountryDetails';

import backgroundImage from '../../assets/background.jpg';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const Homepage = () => {
  const [countryDetails, setCountryDetails] = useState<any>();
  const [showWeather, setShowWeather] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: () => fetchCountryList(),
    staleTime: Infinity,
  });

  console.log(countryDetails);

  if (!isLoading) {
    return (
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        padding={10}
        sx={{ backgroundImage: backgroundImage }}
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
            value={countryDetails?.name?.common}
            onChange={(event, newValue) => {
              setCountryDetails(
                data.find((item: any) => item?.name?.common === newValue)
              );
            }}
            renderInput={(params) => <TextField {...params} label='Country' />}
          />
        </Grid>

        {countryDetails && (
          <>
            <Grid item xs={2}>
              <Button variant='contained' onClick={() => setShowWeather(true)}>
                Weather details
              </Button>
            </Grid>
            <Grid item xs={12}>
              <CountryDetails details={countryDetails} />
            </Grid>
          </>
        )}
        {showWeather && (
          <WeatherDetails
            lat={countryDetails.latlng[0]}
            lng={countryDetails.latlng[0]}
          />
        )}
      </Grid>
    );
  }
  return <Loader show={isLoading} />;
};

export default Homepage;
