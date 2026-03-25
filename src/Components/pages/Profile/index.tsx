import { Box, Grid } from '@mui/material';
import React from 'react';
import HeroCard from './HeroCard/index.tsx';


import LeftSection from './LeftSection/index.tsx';
import UserDetails from './UserDetails/index.tsx';

import { UserProfileData } from '../../../types/UserProfile.ts';

const Profile: React.FC = () => {

    // Mock dynamic profile data based on name
    const profileData: UserProfileData = {
        fullName: 'יוסי ישראלי',
        rank: 'סמל ראשון',
        personalId: '8241053',
        role: 'מפתח Fullstack',
        unit: 'ממר"ם',
        subUnit: 'מדור פיתוח תוכנה',
        email: 'yossi.israeli@idf.il',
        phone: '052-1234567',
        voip: '1234-5678',
        status: 'online',
        avatarUrl: '/soldier.png'
    };

    return (
        <Box sx={{ px: 8, bgcolor: '#f8fafc', minHeight: '100vh', dir: 'rtl', pt: 4 }}>
            <Grid container spacing={4}>
                {/* Right Column (Major) */}
                <Grid size={{ xs: 12, md: 9 }}>
                    <Stack spacing={4}>
                        <HeroCard data={profileData} />
                        <UserDetails data={profileData} />
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
