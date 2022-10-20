import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import CarouselCard from './CarouselCard';
import { locations } from '../data/MockData';

const LocationCards = () => {
  const [cards] = React.useState(locations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location: any) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;