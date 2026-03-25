import React from 'react';
import { Box, Grid } from '@mui/material';
import ProfileCard from './ProfileCard/ProfileCard.tsx';

const Search: React.FC = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f8fafc', minHeight: '100vh', dir: 'rtl' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
              <ProfileCard
                name="דנה כהן"
                role="מנהלת מערכת"
                department="מערכות מידע"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Search;