import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
    Avatar,
    Button,
    Chip,
    Divider,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EditIcon from '@mui/icons-material/Edit';

const HeroCard: React.FC = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: "1em !important",
                borderRadius: 1,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                gap: 3,
                bgcolor: 'white',
                border: '1px solid #f0f0f0',
                height: "13em",
                alignItems: "baseline "
            }}
        >
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Box >
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            bgcolor: '#f1f5f9',
                            color: '#94a3b8',
                            border: '3px solid #fff',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 5,
                            right: 5,
                            width: 18,
                            height: 18,
                            bgcolor: '#22c55e',
                            borderRadius: '50%',
                            border: '3px solid #fff'
                        }}
                    />
                </Box>
                <Box sx={{ alignSelf: "flex-end" }}>
                    <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                            יוסי ישראלי
                        </Typography>
                        <Chip
                            label="סמל ראשון"
                            size="small"
                            sx={{
                                bgcolor: '#004b49',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: 1.5
                            }}
                        />
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                        מספר אישי: 1234567 | תפקיד: לוחם חי"ר
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        יחידה: 900 | פלוגה א'
                    </Typography>
                </Box>
            </Box>

            <Stack direction={{ xs: 'row', md: 'row' }} gap={"1em"} flexWrap="wrap" justifyContent="center" alignSelf={"end"}>
                <Button sx={{ px: "0.6em", pr: "0.3em", gap: 2, borderRadius: "1em" }} variant="text" startIcon={<EditIcon />} color="inherit">
                    עדכון פרטים
                </Button>
                <Button sx={{ px: "0.6em", pr: "0.3em", gap: 2, borderRadius: "1em" }} variant="outlined" startIcon={<PhoneInTalkIcon />} color="inherit">
                    VOIP
                </Button>
                <Button sx={{ px: "0.6em", pr: "0.3em", gap: 2, borderRadius: "1em" }} variant="outlined" startIcon={<PhoneIphoneIcon />} color="inherit">
                    טלפון נייד
                </Button>
                <Button
                    variant="contained"
                    startIcon={<EmailIcon sx={{ alignSelf: "center" }} />}
                    sx={{ px: "0.6em", pr: "0.3em", gap: 2, borderRadius: "1em", bgcolor: '#004b49', '&:hover': { bgcolor: '#003a39' } }}
                >
                    שליחת דוא"ל
                </Button>
            </Stack>
        </Paper>
    );
};

export default HeroCard;
