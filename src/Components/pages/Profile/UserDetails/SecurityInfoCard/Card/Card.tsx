import { Box, Chip, Stack, Typography } from "@mui/material";


const SecurityItem: React.FC<{ icon: React.ReactNode; label: string; value: string; badge?: { label: string; color: any } }> = ({ icon, label, value, badge }) => (
    <Box sx={{ display: 'flex', gap: 2, p: 2, borderRadius: 2, bgcolor: '#f8fafc', mb: 1.5 }}>
        <Box sx={{ color: '#004b49', mt: 0.5 }}>{icon}</Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 0.5 }}>
                {label}
            </Typography>
            <Stack sx={{ display: "flex", justifyContent: "space-between" }} direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#1e293b' }}>
                    {value}
                </Typography>
                {badge && (
                    <Chip label={badge.label} color={badge.color} size="small" sx={{ height: 20, fontSize: '0.7rem' }} />
                )}
            </Stack>
        </Box>
    </Box>
);
export default SecurityItem