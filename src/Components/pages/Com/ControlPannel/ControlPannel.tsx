import React from 'react';
import { Box } from '@mui/material';
import ProcessManagement from './ProcessManagement/ProcessManagement.jsx';
import HistoryTable from './HistoryTable/HistoryTable.tsx';
import MetricsRow from './MetricsRow/MetricsRow.tsx';

const ControlPannel: React.FC = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f8fafc', minHeight: '100vh' }} dir="rtl">
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
