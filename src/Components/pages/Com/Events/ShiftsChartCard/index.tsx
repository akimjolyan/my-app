import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { name: 'לוי', value: 5 },
  { name: 'כהן', value: 6 },
  { name: 'מזרחי', value: 7 },
  { name: 'פרץ', value: 6 },
  { name: 'אדלר', value: 9 },
  { name: 'גולן', value: 8 },
  { name: 'טל', value: 3 },
  { name: 'ברק', value: 7 },
  { name: 'שגיא', value: 9 },
  { name: 'אביב', value: 8 },
  { name: 'נר', value: 10 },
  { name: 'סלע', value: 9 },
  { name: 'זיו', value: 12 },
];
// TODO: make it look better
export default function ShiftsChartCard() {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', height: '100%', border: '1px solid #f0f0f0' }}>
      <CardContent sx={{ p: '24px !important', height: '100%', display: 'flex', flexDirection: 'column' }}>

        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Box display="flex" alignItems="center" gap={1.5} mb={0.5}>
              <Box sx={{ width: 4, height: 20, bgcolor: '#004b49', borderRadius: 4 }} />
              <Typography variant="h6" fontWeight="bold" color="#004b49" sx={{ fontSize: '1.2rem' }}>תורנויות לפי חייל</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2.5 }}>כמות תורנויות מצטברת (רבעון נוכחי)</Typography>
          </Box>
          <Chip label="ממוצע יחידתי: 12" size="small" sx={{ bgcolor: '#f0f4f8', color: '#546e7a', fontWeight: 'bold', borderRadius: 2 }} />
        </Box>
        <BarChart
          dataset={data}
          height={400}
          xAxis={[{
            scaleType: 'band',
            dataKey: 'name',
            reverse: true,
            disableLine: true,
            disableTicks: true,
          }]}
          yAxis={[{
            disableLine: true,
            disableTicks: true,
            label: "" // Hides the Y-axis entirely
          }]}

          series={[{
            dataKey: 'value',
            color: '#cc5a5a', // Matches the reddish-coral in your image
            label: 'תורנויות',
          }]}
          margin={{ top: 40, bottom: 40, left: 10, right: 10 }}
          slotProps={{
            axisTickLabel: {
              style: {
                fill: '#999',
                fontSize: '12px',
              }
            }
          }}
        />

      </CardContent>
    </Card>
  );
}
