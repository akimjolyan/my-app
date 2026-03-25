import React, { useState } from 'react';
import {
    Box,
    TextField,
    InputAdornment,
    Typography,
    Paper,
    Stack,
    Container,
    IconButton,
} from '@mui/material';
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HistoryIcon from '@mui/icons-material/History';

const ActionCard: React.FC<{ icon: React.ReactNode; label: string; sx?: any }> = ({ icon, label, sx }) => (
    <Paper
        elevation={0}
        sx={{
            width: 170,
            p: 3,
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: '1px solid #e4edea',
            '&:hover': {
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                transform: 'translateY(-2px)',
                borderColor: '#004b49'
            },
            ...sx
        }}
    >
        <Box sx={{ color: '#004b49', fontSize: '2rem' }}>
            {icon}
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#5a7570' }}>
            {label}
        </Typography>
    </Paper>
);

const Home: React.FC = () => {
    const [query, setQuery] = useState('');

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f5f7f6',
                p: 2,
                dir: 'rtl'
            }}
        >
            <Container maxWidth="sm">
                <Stack spacing={4} alignItems="center">
                    {/* Logo Section */}
                    <Box
                        component="img"
                        src="/logo-small.png"
                        alt="MIZEMI"
                        sx={{
                            height: { xs: 120, md: 180 },
                            objectFit: 'contain',
                            mixBlendMode: 'multiply',
                            mb: 2
                        }}
                    />

                    {/* Search Field */}
                    <TextField
                        fullWidth
                        placeholder="חפש משרת, תפקיד או מספר אישי..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        variant="outlined"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton size="small">
                                            <MicNoneIcon color="action" />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                sx: {
                                    borderRadius: 50,
                                    bgcolor: 'white',
                                    height: 56,
                                    px: 2,
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                    '& fieldset': {
                                        borderColor: '#dde6e3'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#004b49 !important'
                                    }
                                }
                            }
                        }}
                    />

                    {/* Quick Actions Row */}
                    <Stack direction="row" display={"flex"} alignItems={"center"} gap={"2em"}>
                        <ActionCard sx={{ borderRadius: 4 }} icon={<StarBorderIcon />} label="מועדפים" />
                        <ActionCard sx={{ borderRadius: 4 }} icon={<HistoryIcon />} label="חיפושים אחרונים" />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Home;
