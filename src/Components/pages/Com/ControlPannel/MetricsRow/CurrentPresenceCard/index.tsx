import React from 'react';
import { Card, CardContent, Typography, Box, Stack, CircularProgress } from '@mui/material';

interface CurrentPresenceCardProps {
  present: number;
  total: number;
}

const CurrentPresenceCard: React.FC<CurrentPresenceCardProps> = ({ present, total }) => {
  const percentage = Math.round((present / total) * 100);

  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', height: '100%', border: '1px solid #f0f0f0' }}>
      <CardContent sx={{ p: '24px !important', dir: 'rtl' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" mb={0.5}>
              נוכחות כרגע
            </Typography>
            <Typography variant="h3" fontWeight="bold">
              {present} / {total}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              נוכחים
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant="determinate"
              value={100}
              size={100}
              thickness={4}
              sx={{ color: '#f1f5f9' }}
            />
            <CircularProgress
              variant="determinate"
              value={percentage}
              size={100}
              thickness={4}
              sx={{
                color: '#004b49',
                position: 'absolute',
                left: 0,
                [`& .MuiCircularProgress-circle`]: {
                  strokeLinecap: 'round',
                },
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1" component="div" sx={{ fontWeight: 800 }}>
                {percentage}%
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CurrentPresenceCard;
