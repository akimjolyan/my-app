import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
} from '@mui/material';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CommanderNotesCard: React.FC = () => {
    return (
        <Paper
            sx={{
                p: "1.5em 2em  !important",
                borderRadius: 1,
                border: '1px solid #f0f0f0',
                bgcolor: 'white'
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                <StickyNote2OutlinedIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    הערות מפקד
                </Typography>
            </Stack>

            <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#fff9f0', border: '1px solid #ffecb3' }}>
                <Stack direction="row" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#856404' }}>
                        נשלח לקצונה
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#856404' }}>
                        12/05/2026
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <AccountCircleIcon sx={{ fontSize: 18, color: '#856404' }} />
                    <Typography variant="caption" sx={{ color: '#856404' }}>
                        מתועד ע"י: רס"ן דנה כהן
                    </Typography>
                </Stack>
            </Box>
        </Paper>
    );
};

export default CommanderNotesCard;
