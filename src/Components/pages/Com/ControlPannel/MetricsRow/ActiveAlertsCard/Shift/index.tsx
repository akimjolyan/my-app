import { Avatar, Box, Stack, Typography } from "@mui/material"
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SecurityIcon from '@mui/icons-material/Security';
interface ShiftProps {
    type: 'kitchen' | 'security';
    role: string;
    person: string;
}

const Shift = (alert: ShiftProps) => {
    return (
        <Stack sx={{ m: "0 !important", width: '48%', height: "100%", p: 1, borderRadius: "1em", border: "1px solid #f1f5f9", gap: 2 }} direction="row" alignItems="center">
            <Avatar sx={{
                bgcolor: alert.type === 'kitchen' ? '#fde68a' : '#dcfce7',
                color: alert.type === 'kitchen' ? '#92400e' : '#166534',
                width: 36,
                height: 36
            }}>
                {alert.type === 'kitchen' ? <LocalDiningIcon fontSize="small" /> : <SecurityIcon fontSize="small" />}
            </Avatar>
            <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                    {alert.role}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {alert.person}
                </Typography>
            </Box>
        </Stack>
    )
}
export default Shift;