import React from 'react';
import { Card, CardContent, Typography, Box, Stack, Avatar } from '@mui/material';
import SecurityUpdateWarningIcon from '@mui/icons-material/SecurityUpdateWarning';

import Shift from './Shift/index.tsx';

interface Alert {
  id: string;
  type: 'kitchen' | 'security';
  role: string;
  person: string;
}

interface ActiveAlertsCardProps {
  alerts?: Alert[];
  updatedText?: string;
}

const defaultAlerts: Alert[] = [
  { id: '1', type: 'kitchen', role: 'מטבח', person: 'סמ"ר יונתן כץ' },
  { id: '2', type: 'security', role: 'אבטחה - שער ראשי', person: 'רב"ט מיה אברהם' },
];

const ActiveAlertsCard: React.FC<ActiveAlertsCardProps> = ({
  alerts = defaultAlerts,
  updatedText = "עודכן לפני 5 דק'"
}) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', height: '100%', border: '1px solid #f0f0f0' }}>
      <CardContent sx={{ p: '24px !important', dir: 'rtl' }}>
        <Stack direction="row" spacing={2} alignItems="center" mb={3} gap={1}>
          <Avatar sx={{ bgcolor: '#004b49', width: 44, height: 44 }}>
            <SecurityUpdateWarningIcon sx={{ fontSize: 24, color: 'white' }} />
          </Avatar>
          <Box flex={1} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle2" fontWeight="bold" color="#1e293b">
              תורנויות פעילות כרגע
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {updatedText}
            </Typography>
          </Box>
        </Stack>

        <Stack spacing={3} sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: "space-between", alignItems: "center" }}>
          {alerts.map((alert) => (
            <Shift key={alert.id} type={alert.type} role={alert.role} person={alert.person} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ActiveAlertsCard;
