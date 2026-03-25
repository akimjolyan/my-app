import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const RecentActionsCard: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: "1.5em 2em  !important",
                borderRadius: 1,
                border: '1px solid #f0f0f0',
                bgcolor: 'white'
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center" mb={3}>
                <HistoryIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    פעולות אחרונות
                </Typography>
            </Stack>

            <Box>
                {[
                    { title: 'עודכן סטטוס סיווג ביטחוני', desc: 'לפני יומיים | ע"י קב"ס יחידה' },
                    { title: 'הזנת יציאה לחופשה', desc: 'לפני שבוע | ע"י מפקד ישיר' }
                ].map((item, i, arr) => (
                    <Box key={i} sx={{ display: 'flex', gap: 2, mb: i === arr.length - 1 ? 0 : 3, position: 'relative' }}>
                        <Box sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            bgcolor: '#004b49',
                            mt: 0.5,
                            flexShrink: 0,
                            zIndex: 1
                        }} />
                        {i !== arr.length - 1 && (
                            <Box sx={{
                                position: 'absolute',
                                top: 16,
                                right: 5,
                                width: 2,
                                bottom: -24,
                                bgcolor: '#f1f5f9',
                                zIndex: 0
                            }} />
                        )}
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
};

export default RecentActionsCard;
