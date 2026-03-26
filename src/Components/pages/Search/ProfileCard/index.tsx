import React from 'react';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Button,
    Box,
    Badge,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
    id: string;
    name: string;
    role: string;
    departmentPath: string;
    avatarUrl?: string;
    isOnline?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ id, name, role, departmentPath, avatarUrl, isOnline = true }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: '16px',

                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05)',
                    transform: 'translateY(-4px)',
                    borderColor: '#e2e8f0',
                },
                textAlign: 'center',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <CardContent sx={{ pt: 2.5, pb: 1.5, px: 3 }}>
                {/* Avatar Section */}
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 1.5 }}>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{
                            '& .MuiBadge-badge': {
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                bgcolor: isOnline ? '#22c55e' : '#94a3b8',
                                border: '2.5px solid white',
                                bottom: '8%',
                                right: '8%',
                            },
                        }}
                    >
                        <Box sx={{
                            borderRadius: '50%',
                            p: 0.4,
                            border: '1px solid #f1f5f9',
                            display: 'flex'
                        }}>
                            <Avatar
                                src={avatarUrl}
                                sx={{
                                    width: 70,
                                    height: 70,
                                    bgcolor: '#f8fafc',
                                }}
                            />
                        </Box>
                    </Badge>
                </Box>

                {/* Profile Text */}
                <Typography sx={{ fontWeight: 800, color: '#1e293b', mb: 0.2, fontSize: '0.95rem' }}>
                    {name}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: '#004b49', mb: 0.2, fontSize: '0.8rem' }}>
                    {role}
                </Typography>
                <Typography sx={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 500 }}>
                    {departmentPath}
                </Typography>

                {/* Action Button */}
                <Box sx={{ mt: 2, mb: 0.5 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => navigate(`/profile/${id}`)}
                        startIcon={<VisibilityOutlinedIcon sx={{ ml: 1, mr: 0, fontSize: 16 }} />}
                        sx={{
                            borderRadius: '10px',
                            bgcolor: '#f1f5f9',
                            color: '#475569',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            boxShadow: 'none',
                            py: 0.8,
                            '&:hover': {
                                bgcolor: '#e2e8f0',
                                boxShadow: 'none',
                                color: '#004b49',
                            },
                        }}
                    >
                        צפה בפרופיל
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;