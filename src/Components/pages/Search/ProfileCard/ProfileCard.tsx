import React from 'react';
import {
    Card,
    CardContent,
    Avatar,
    Typography,
    Button,
    Divider,
    Box,
    Badge,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface ProfileCardProps {
    name: string;
    role: string;
    department: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, department }) => {
    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 260,
                borderRadius: 4,
                bgcolor: 'white',
                border: '1px solid #f0f0f0',
                transition: 'all 0.2s',
                '&:hover': {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                    transform: 'translateY(-4px)',
                    borderColor: '#004b49',
                },
                textAlign: 'center',
                overflow: 'visible',
            }}
        >
            <CardContent sx={{ pt: 4, pb: 3, px: 3 }}>
                {/* Avatar Section */}
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                        sx={{
                            '& .MuiBadge-badge': {
                                width: 14,
                                height: 14,
                                borderRadius: '50%',
                                bgcolor: '#22c55e',
                                border: '2px solid white',
                            },
                        }}
                    >
                        <Avatar
                            src="/hahaha.png"
                            sx={{ width: 80, height: 80, bgcolor: '#f1f5f9', border: '1px solid #f0f0f0' }}
                        />
                    </Badge>
                </Box>

                {/* Profile Text */}
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b', mb: 0.5 }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 0.2 }}>
                    {role}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748b' }}>
                    צוות {department}
                </Typography>

                <Divider sx={{ my: 2.5, borderColor: '#f1f5f9' }} />

                {/* Action Button */}
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<AccountCircleOutlinedIcon sx={{ ml: 1, mr: 0 }} />}
                    sx={{
                        borderRadius: 8,
                        color: '#64748b',
                        borderColor: '#e2e8f0',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        '&:hover': {
                            bgcolor: '#f8fafc',
                            borderColor: '#004b49',
                            color: '#004b49',
                        },
                    }}
                >
                    צפה בפרופיל
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;