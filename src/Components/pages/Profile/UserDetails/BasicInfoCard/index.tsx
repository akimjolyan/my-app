import React from 'react';
import {
    Box,
    Paper,
    Typography,
    Stack,
    Divider,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { UserProfileData } from '../../../../../types/UserProfile';

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
        <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
            {label}
        </Typography>
        <Typography variant="body2" sx={{ color: '#1e293b', fontWeight: 700 }}>
            {value}
        </Typography>
    </Box>
);

const BasicInfoCard: React.FC<{ data: UserProfileData }> = ({ data }) => {
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
                <InfoOutlinedIcon sx={{ color: '#004b49' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    מידע בסיסי
                </Typography>
            </Stack>

            <Box>
                <InfoRow label="שם מלא" value={data.fullName} />
                <Divider />
                <InfoRow label="תאריך גיוס" value="01/08/2021" />
                <Divider />
                <InfoRow label="תפקיד" value={data.role} />
                <Divider />
                <InfoRow label="מספר אישי" value={data.personalId} />
                <Divider />
                <InfoRow label="תאריך לידה" value="15/05/2002" />
                <Divider />
                <InfoRow label="טלפון" value={data.phone} />
                <Divider />
                <InfoRow label="דואר אלקטרוני" value={data.email} />
                <Divider />
                <InfoRow label="תאריך שחרור" value="01/08/2024" />
                <Divider />
                <InfoRow label="VOIP" value={data.voip} />
                <Divider />
                <InfoRow label="דרגה" value={data.rank} />
                <Divider />
                <InfoRow label="סוג שירות" value="חובה" />
            </Box>
        </Paper>
    );
};

export default BasicInfoCard;
