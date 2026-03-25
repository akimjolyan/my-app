import React from 'react';
import { Box } from '@mui/material';
import ProcessManagement from './ProcessManagement/index.tsx';
import HistoryTable from './HistoryTable/index.tsx';
import MetricsRow from './MetricsRow/index.tsx';

const ControlPannel: React.FC = () => {
  return (
    <Box sx={{ p: 4, minHeight: '100vh' }} dir="rtl">
      <Box mb={4}>
        <MetricsRow />
      </Box>

      <Box mb={4}>
        <ProcessManagement />
      </Box>

      <Box>
        <HistoryTable />
      </Box>
    </Box>
  );
};

export default ControlPannel;
