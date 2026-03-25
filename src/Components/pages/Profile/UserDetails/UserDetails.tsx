import React from 'react';
import { Grid, Stack } from '@mui/material';
import BasicInfoCard from './BasicInfoCard/BasicInfoCard.tsx';
import SecurityInfoCard from './SecurityInfoCard/SecurityInfoCard.tsx';
import CommanderNotesCard from './CommanderNotesCard/CommanderNotesCard.tsx';

const UserDetails: React.FC = () => {
    return (
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
                <BasicInfoCard />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={4}>
                    <SecurityInfoCard />
                    <CommanderNotesCard />
                </Stack>
            </Grid>
        </Grid>
    );
};
export default UserDetails;