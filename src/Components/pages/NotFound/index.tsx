import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#f8fafc',
                textAlign: 'center',
                p: 3
            }}
            dir="rtl"
        >
            <Container maxWidth="sm">
                <Stack spacing={4} alignItems="center">
                    {/* Icon Section */}
                    <Box
                        sx={{
                            width: 120,
                            height: 120,
                            bgcolor: '#fee2e2',
                            color: '#ef4444',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            animation: 'pulse 2s infinite'
                        }}
                    >
                        <ErrorOutlineIcon sx={{ fontSize: 64 }} />
                    </Box>

                    {/* Text Section */}
                    <Box>
                        <Typography variant="h2" sx={{ fontWeight: 900, color: '#1e293b', mb: 1 }}>
                            404
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#475569', mb: 2 }}>
                            הדף שחיפשת לא נמצא
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: 400, mx: 'auto' }}>
                            מצטערים, נראה שהדף שאתה מנסה לגשת אליו אינו קיים או שהועבר לכתובת אחרת.
                        </Typography>
                    </Box>

                    {/* Action Button */}
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<HomeIcon sx={{ ml: 1, mr: 0 }} />}
                        onClick={() => navigate('/')}
                        sx={{
                            bgcolor: '#004b49',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: '12px',
                            fontWeight: 700,
                            boxShadow: '0 10px 15px -3px rgba(0, 75, 73, 0.3)',
                            '&:hover': {
                                bgcolor: '#003a38',
                                boxShadow: '0 20px 25px -5px rgba(0, 75, 73, 0.4)',
                            }
                        }}
                    >
                        חזרה לדף הבית
                    </Button>
                </Stack>
            </Container>

            <style>
                {`
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.05); opacity: 0.8; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}
            </style>
        </Box>
    );
};

export default NotFound;
