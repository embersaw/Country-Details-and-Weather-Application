import {
  Card,
  CardHeader,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import { DataGrid, GridRowsProp } from '@mui/x-data-grid';

import { columns } from './column';

type props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details: any;
};

const CountryDetails = (props: props) => {
  const { details } = props;

  const rows: GridRowsProp = [
    { id: 1, key: 'Official Name', value: details?.name?.official },
    { id: 2, key: 'Total Area (square km) ', value: details?.area },
    { id: 3, key: 'Total Population ', value: details?.population },
    { id: 4, key: 'Capital ', value: details?.capital?.[0] },
    { id: 5, key: 'Continent ', value: details?.continents?.[0] },
    {
      id: 6,
      key: 'Native Language',
      value: details?.languages[Object.keys(details?.languages)?.[0]],
    },
    {
      id: 7,
      key: 'Currency',
      value: `${
        details?.currencies[Object.keys(details?.currencies)[0]].name
      } (${details?.currencies[Object.keys(details?.currencies)[0]].symbol} )`,
    },
  ];

  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='flex-start'
      spacing={1}
      marginTop={2}
    >
      <Grid item md={8} xs={12}>
        <Card elevation={3}>
          <CardHeader title={`Details of ${details?.name?.official}`} />
          <CardContent>
            <DataGrid
              columns={columns}
              rows={rows}
              rowSelection={false}
              columnHeaderHeight={0}
              hideFooter
              density='compact'
              style={{ marginBottom: 20 }}
            />
            {details?.timezones?.length > 1 ? (
              <Typography>
                {details?.name?.official} has {details?.timezones?.length}{' '}
                different timezones : {details?.timezones?.toString()}
              </Typography>
            ) : (
              <Typography>
                {details?.name?.official} follows only one timezone :
                {` ${details.timezones[0]}`}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item md={4} xs={12}>
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader title={`Flag of ${details?.name?.official}`} />
            <CardMedia
              component='img'
              image={details?.flags.png}
              alt={`Flag of ${details?.name?.official}`}
            />
            <CardContent>
              <Typography variant='subtitle2'>{details?.flags?.alt}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountryDetails;
