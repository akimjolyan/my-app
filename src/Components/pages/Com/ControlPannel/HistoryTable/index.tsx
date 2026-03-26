import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const HistoryTable: React.FC = () => {
  const rows = [
    { id: 1, name: 'קליטה ביחידה', date: '12/05/2024', status: 'בוצע' },
    { id: 2, name: 'קורס מפקדים', date: '28/03/2024', status: 'בוצע' },
  ];

  return (
    <Card sx={{ borderRadius: 4, border: '1px solid #f0f0f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
      <CardContent sx={{ p: '24px !important', dir: 'rtl' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Avatar sx={{ color: '#64748b', border: '1px solid #f1f5f9' }}>
            <HistoryIcon />
          </Avatar>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            היסטוריית תהליכים שהושלמו
          </Typography>
        </Box>

        <TableContainer sx={{ border: '1px solid #f8fafc', borderRadius: 2 }}>
          <Table>
            <TableHead >
              <TableRow>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>שם התהליך</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>תאריך סיום</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold' }}>סטטוס</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>פעולות</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {row.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2">
                      {row.date}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      icon={<CheckCircleIcon sx={{ fontSize: '14px !important' }} />}
                      label={row.status}
                      size="small"
                      sx={{
                        bgcolor: '#dcfce7',
                        color: '#166534',
                        fontWeight: 'bold',
                        px: 1,
                        '& .MuiChip-icon': { color: '#166534' }
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontWeight: 'bold',
                        color: '#3b82f6',
                        '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.04)' }
                      }}
                    >
                      צפייה בסיכום
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default HistoryTable;
