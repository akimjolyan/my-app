import React from 'react';
import { Card, CardContent, Typography, Box, Stack, Avatar, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import GroupIcon from '@mui/icons-material/Group';

interface TotalPersonnelCardProps {
  total?: number;
}

const TotalPersonnelCard: React.FC<TotalPersonnelCardProps> = ({ total = 13 }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', height: '100%', border: '1px solid #f0f0f0' }}>
      <CardContent sx={{ p: '24px !important', dir: 'rtl' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Avatar sx={{ width: 40, height: 40 }}>
            <GroupIcon fontSize="small" />
          </Avatar>
          <Chip
            icon={<DoneIcon sx={{ fontSize: '14px !important' }} />}
            label="צוות מלא"
            size="small"
            sx={{
              px: 1,
              bgcolor: '#e6f4f1',
              color: '#004b49',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              '& .MuiChip-icon': { color: '#004b49' }
            }}
          />
        </Stack>

        <Box textAlign="right">
          <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
            סה"כ כוח אדם
          </Typography>
          <Typography variant="h3" fontWeight="bold" >
            {total}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalPersonnelCard;
