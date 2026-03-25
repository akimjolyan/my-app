import { Grid, Stack } from '@mui/material';
import React from 'react';
import UnitHierarchyCard from './UnitHierarchyCard/index.tsx';

import CommandHierarchyCard from './CommandHierarchyCard/index.tsx';
import RecentActionsCard from './RecentActionsCard/index.tsx';

const LeftSection: React.FC = () => {
    return (
        < Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={4}>
                <UnitHierarchyCard />
                <CommandHierarchyCard />
                <RecentActionsCard />
            </Stack>
        </Grid >
    );
};
export default LeftSection;