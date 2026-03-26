import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import UpcomingShiftsCard from './UpcomingShiftsCard/index.tsx';
import ShiftsChartCard from './ShiftsChartCard/index.tsx';

import CustomCalendar from './Calendar/index.tsx';

export default function Events() {
  return (
    <Box sx={{ p: 4, minHeight: '10em' }} dir="rtl">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Box>
          <Typography variant="h4" fontWeight="bold" color="#004b49" gutterBottom>
            שיבוץ תורנויות
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            לו"ז מבצעי וחלוקת משאבים עבור יחידה 8142
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon sx={{ alignSelf: 'center', margin: 0 }} />}
          sx={{
            bgcolor: 'white',
            borderRadius: 8,
            borderColor: '#e0e0e0',
            color: '#004b49',
            fontWeight: 'bold',
            textTransform: 'none',
            px: 2,
            gap: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
          }}
        >
          ייצוא דוח
        </Button>
      </Box>

      {/* Grid Content */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>

        <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '2fr 1fr' }} gap={3}>
          <ShiftsChartCard />
          <UpcomingShiftsCard />
        </Box>

        <Box sx={{ width: "-webkit-fill-available" }}>

          <CustomCalendar />
        </Box>
      </Box>
    </Box>
  );
}
