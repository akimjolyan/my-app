import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Typography,
    Avatar,
    IconButton,
    Badge,
} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                height: '70px',
                width: '100%',
                backgroundColor: 'white',
                borderBottom: '1px solid #f1f5f9',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <div
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                    <img
                        src="/logo-small.png"
                        alt="Mizemi"
                        style={{ height: '40px', objectFit: 'contain', mixBlendMode: 'multiply' }}
                    />
                </div>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
                        to="/dashboard"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#004b49' : '#64748b',
                            fontWeight: isActive ? 'bold' : '500',
                            fontSize: '0.95rem'
                        })}
                    >
                        לוח בקרה
                    </NavLink>
                </nav>
            </div>

            {/* Left Group: User Profile & Alerts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <IconButton size="small" sx={{ color: '#64748b' }}>
                    <Badge variant="dot" color="error">
                        <NotificationsNoneIcon sx={{ fontSize: 22 }} />
                    </Badge>
                </IconButton>

                <div style={{ height: '24px', width: '1px', backgroundColor: '#f1f5f9' }}></div>

                <div
                    onClick={() => navigate('/profile')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ textAlign: 'right' }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1e293b', lineHeight: 1.2 }}>
                            רס"ן דנה כהן
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#64748b' }}>
                            מנהלת מערכת
                        </Typography>
                    </div>
                    <Avatar
                        sx={{
                            width: 38,
                            height: 38,
                            bgcolor: '#f1f5f9',
                            color: '#94a3b8',
                            border: '1px solid #f0f0f0'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
