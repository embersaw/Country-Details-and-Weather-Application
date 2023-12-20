/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridRowsProp } from '@mui/x-data-grid';

export const generateRows = (details: any) => {
  const rows: GridRowsProp = [
    { id: 1, key: 'Official Name', value: details?.name?.official },
    {
      id: 2,
      key: 'Total Area (square km) ',
      value: `${details?.area}`,
    },
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
    { id: 8, key: 'Latitude ', value: `${details?.latlng?.[0]}°` },
    { id: 9, key: 'Longitude ', value: `${details?.latlng?.[1]}°` },
  ];
  return rows;
};
