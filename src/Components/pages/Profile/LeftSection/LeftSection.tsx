import { Grid, Stack } from '@mui/material';
import React from 'react';
import UnitHierarchyCard from './UnitHierarchyCard/UnitHierarchyCard.tsx';

import CommandHierarchyCard from './CommandHierarchyCard/CommandHierarchyCard.tsx';
import RecentActionsCard from './RecentActionsCard/RecentActionsCard.tsx';

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