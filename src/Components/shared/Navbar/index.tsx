import { Box, Typography, Avatar, IconButton, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useUser } from '../../../contexts/UserContext.tsx';
import { useThemeMode } from '../../../contexts/ThemeModeContext.tsx';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { toggleTheme } = useThemeMode();

    return (
        <Box
            sx={{
                height: '70px',
                width: '100%',
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 2rem',
                position: 'sticky',
                top: 0,
                zIndex: 1100,
            }}
            dir="rtl"
        >
            {/* Right Group: Logo & Nav */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <Box
                    onClick={toggleTheme}
                    sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                    <Box
                        component="img"
                        src="/logo-small.png"
                        alt="Mizemi"
                        sx={{
                            height: '40px',
                            objectFit: 'contain',
                            mixBlendMode: 'multiply',
                        }}
                    />
                </Box>

                <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#004b49' : '#64748b',
                            fontWeight: isActive ? 'bold' : '500',
                            fontSize: '0.95rem'
                        })}
                    >
                        דף הבית
                    </NavLink>
                    <NavLink
                        to="/Dashboard/1"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#004b49' : '#64748b',
                            fontWeight: isActive ? 'bold' : '500',
                            fontSize: '0.95rem'
                        })}
                    >
                        לוח בקרה
                    </NavLink>
                </Box>
            </Box>

            {/* Left Group: User Profile & Alerts */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                    <Badge variant="dot" color="error">
                        <NotificationsNoneIcon sx={{ fontSize: 22 }} />
                    </Badge>
                </IconButton>

                <Box sx={{ height: '24px', width: '1px', bgcolor: 'divider' }}></Box>

                <Box
                    onClick={() => navigate('/profile/me')}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary', lineHeight: 1.2 }}>
                            {user?.fullName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {user?.job}
                        </Typography>
                    </Box>
                    <Avatar
                        alt={user?.fullName}
                        sx={{
                            width: 38,
                            height: 38,
                            bgcolor: 'grey.100',
                            color: 'grey.300',
                            border: '1px solid',
                            borderColor: 'divider'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;
