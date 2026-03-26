import React from 'react';
import { Card, CardContent, Typography, Box, Button, Avatar } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const shifts = [
  { id: 1, name: 'זיו אברהמי', role: 'אבטחה והיקפית', date: "24 באוקטו'", time: 'מחר', Icon: SecurityIcon, iconColor: '#e8f5e9', iconTextColor: '#2e7d32' },
  { id: 2, name: 'לוי משה', role: 'תורנות מטבח', date: "25 באוקטו'", time: 'בעוד יומיים', Icon: RestaurantIcon, iconColor: '#fff3e0', iconTextColor: '#ef6c00' },
  { id: 3, name: 'טל כהן', role: 'תורנות רס"ר', date: "26 באוקטו'", time: "יום ג'", Icon: CleaningServicesIcon, iconColor: '#f5f5f5', iconTextColor: '#616161' },
  { id: 4, name: 'ניר גל', role: 'לוגיסטיקה ואספקה', date: "28 באוקטו'", time: 'סופ"ש', Icon: LocalShippingIcon, iconColor: '#e0f2f1', iconTextColor: '#00695c' }
];

export default function UpcomingShiftsCard() {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', height: '100%', border: '1px solid #f0f0f0' }}>
      <CardContent sx={{ p: '24px !important' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Box sx={{ width: 4, height: 20, borderRadius: 4 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: "text.secondary", fontSize: '1.2rem' }}>תורנויות קרובות</Typography>
          </Box>
          <Button variant="text" size="small" sx={{ fontWeight: 'bold' }}>הצג הכל</Button>
        </Box>
        <Box display="flex" flexDirection="column" gap={2}>
          {shifts.map(shift => (
            <Box key={shift.id} display="flex" justifyContent="space-between" alignItems="center" p={2} borderRadius={3} border="1px solid #f0f0f0" sx={{ transition: '0.2s', '&:hover': { bgcolor: 'background.default' } }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{ bgcolor: shift.iconColor, color: shift.iconTextColor, border: '1px solid rgba(0,0,0,0.05)' }}>
                  <shift.Icon fontSize="small" />
                </Avatar>
                <Box textAlign="right">
                  <Typography variant="subtitle2" fontWeight="bold" color="#333">{shift.name}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>{shift.role}</Typography>
                </Box>
              </Box>

              <Box textAlign="left">
                <Typography variant="subtitle2" fontWeight="bold" color="#333" align="left">{shift.date}</Typography>
                <Typography variant="body2" color="text.secondary" align="left" sx={{ fontSize: '0.75rem' }}>{shift.time}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
