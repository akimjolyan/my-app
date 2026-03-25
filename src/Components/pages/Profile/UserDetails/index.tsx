import React from 'react';
import { Grid, Stack } from '@mui/material';
import BasicInfoCard from './BasicInfoCard/index.tsx';
import SecurityInfoCard from './SecurityInfoCard/index.tsx';
import CommanderNotesCard from './CommanderNotesCard/index.tsx';

import { UserProfileData } from '../../../../types/UserProfile.ts';

const UserDetails: React.FC<{ data: UserProfileData }> = ({ data }) => {
    return (
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
                <BasicInfoCard data={data} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={4}>
                    <SecurityInfoCard data={data} />
                    <CommanderNotesCard data={data} />
                </Stack>
            </Grid>
        </Grid>
    );
};
export default UserDetails;