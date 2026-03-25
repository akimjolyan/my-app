import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SecurityIcon from '@mui/icons-material/Security';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import {
    Box,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import React from 'react';
import SecurityItem from './Card/Card.tsx';


import { UserProfileData } from '../../../../../types/UserProfile.ts';

const SecurityInfoCard: React.FC<{ data: UserProfileData }> = ({ data }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: "1.5em 2em  !important",
                borderRadius: 1,
                border: '1px solid #f0f0f0',
                bgcolor: 'white',
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                <SecurityIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    מידע מפקדים וביטחון
                </Typography>
            </Stack>

            <Box>
                <SecurityItem icon={<LockOutlinedIcon fontSize="small" />} label="סיווג ביטחוני" value="סודי" />
                <SecurityItem
                    icon={<ShowChartIcon fontSize="small" />}
                    label='אירועי ב"מ'
                    value="0 אירועים חריגים"
                    badge={{ label: 'תקין', color: 'success' }}
                />
                <SecurityItem
                    icon={<ReceiptLongIcon fontSize="small" />}
                    label="טפסים חתומים"
                    value="3 מתוך 5"
                    badge={{ label: 'ממתין', color: 'warning' }}
                />
                <SecurityItem
                    icon={<EventAvailableIcon fontSize="small" />}
                    label="סטטוס נוכחות היום"
                    value={data.status === 'online' ? 'נוכח ביחידה' : 'אינו נוכח'}
                />
            </Box>
        </Paper>
    );
};

export default SecurityInfoCard;
