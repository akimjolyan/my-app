import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const HierarchyNode: React.FC<{ label: string; active?: boolean; indent?: number }> = ({ label, active, indent = 0 }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', py: 1, pr: indent * 3 }}>
        {indent > 0 && <ArrowBackIosNewIcon sx={{ fontSize: 12, ml: 1, color: '#94a3b8' }} />}
        <Typography
            variant="body2"
            sx={{
                fontWeight: active ? 'bold' : 'normal',
                color: active ? '#004b49' : '#64748b',
                bgcolor: active ? '#e6f4f1' : 'transparent',
                px: active ? 1.5 : 0,
                py: active ? 0.5 : 0,
                borderRadius: 1
            }}
        >
            {label}
        </Typography>
    </Box>
);

const UnitHierarchyCard: React.FC = () => {
    return (

        <Paper
            sx={{
                p: "1.5em 2em  !important",
                borderRadius: 1,
                border: '1px solid #f0f0f0',
                bgcolor: 'white',
                height: "13em"
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center" >
                <BusinessIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    היררכיה יחידתית
                </Typography>
            </Stack>

            <Box>
                <HierarchyNode label="מרכז (לוגיסטיקה)" />
                <HierarchyNode label="ענף" indent={1} />
                <HierarchyNode label="מדור" indent={2} />
                <HierarchyNode label="צוות נוכחי" indent={3} active />
            </Box>
        </Paper>

    );
};

export default UnitHierarchyCard;
