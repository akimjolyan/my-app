import React from 'react';
import { Box, Grid } from '@mui/material';
import HeroCard from './HeroCard/HeroCard.tsx';


import LeftSection from './LeftSection/LeftSection.tsx';
import UserDetails from './UserDetails/UserDetails.tsx';

const Profile: React.FC = () => {
    return (
        <Box sx={{ px: 8, bgcolor: '#f8fafc', minHeight: '100vh', dir: 'rtl' }}>
            <Grid container spacing={4}>
                {/* Right Column (Major) */}
                <Grid size={{ xs: 12, md: 9 }}>
                    <Stack spacing={4}>
                        <HeroCard />
                        <UserDetails />
                    </Stack>
                </Grid>

                {/* Left Column (Side) */}
                <LeftSection />
            </Grid>
        </Box>
    );
};

// --- Helper for spacing ---
const Stack: React.FC<{ children: React.ReactNode; spacing: number }> = ({ children, spacing }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing }}>
        {children}
    </Box>
);

export default Profile;
