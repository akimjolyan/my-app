import React from 'react';
import { Box, Grid, Typography, Button, IconButton, Paper } from '@mui/material';
import ProfileCard from './ProfileCard/index.tsx';
import SortIcon from '@mui/icons-material/Sort';
import GridViewIcon from '@mui/icons-material/GridView';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const searchResults = [
  { name: 'סרן נועם שרון', role: 'Backend ראש צוות', departmentPath: 'מדור פיתוח | ענף מערכות', avatarUrl: '/avatar1.png' },
  { name: 'קא"ב דניאל כהן', role: 'מפתח Fullstack בכיר', departmentPath: 'מדור פיתוח | צוות UI', avatarUrl: '/avatar2.png' },
  { name: 'רס"ן עידו ישראלי', role: 'רמ"ד פיתוח', departmentPath: 'ענף מערכות | ממר"ם', avatarUrl: '/avatar3.png' },
  { name: 'רס"ל יניב גור', role: 'QA מפתח אוטומציה', departmentPath: 'מדור פיתוח | ענף מערכות', avatarUrl: '/avatar4.png' },
  { name: 'סגן מאי ארד', role: 'מעצב מוצר (Product)', departmentPath: 'מדור פיתוח | צוות UI/UX', avatarUrl: '/avatar5.png' },
  { name: 'סמ"ר רועי אזולאי', role: 'DevOps Engineer', departmentPath: 'מדור תשתיות | ענף מערכות', avatarUrl: '/avatar6.png', isOnline: false },
];

const Search: React.FC = () => {
  return (
    <Box sx={{ px: 4, bgcolor: '#f8fafc' }} dir="rtl">
      <Box sx={{ maxWidth: 1400, mx: 'auto' }}>

        {/* Breadcrumbs
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Typography sx={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500, display: 'flex', gap: 1 }}>
            <span>מרכז טכנולוגי</span>
            <span>&gt;</span>
            <span>ענף מערכות מידע</span>
            <span>&gt;</span>
            <span style={{ color: '#64748b', fontWeight: 700 }}>מדור פיתוח תוכנה</span>
          </Typography>
        </Box> */}

        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 5 }}>

          {/* Title Area */}
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b', mb: 1 }}>
              תוצאות חיפוש עבור: "עידו ישראלי"
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#94a3b8', fontWeight: 500 }}>
              נמצאו 6 תוצאות התואמות את החיפוש שלך
            </Typography>
          </Box>
          {/* Controls Bar */}
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              variant="outlined"
              startIcon={<SortIcon sx={{ ml: 1, mr: 0, fontSize: 18 }} />}
              sx={{
                bgcolor: 'white',
                borderRadius: '10px',
                borderColor: '#e2e8f0',
                color: '#64748b',
                textTransform: 'none',
                fontWeight: 700,
                fontSize: '0.85rem',
                '&:hover': { bgcolor: '#f8fafc', borderColor: '#cbd5e1' }
              }}
            >
              מיון לפי
            </Button>
            <IconButton sx={{ bgcolor: 'white', border: '1px solid #e2e8f0', borderRadius: '10px', color: '#64748b' }}>
              <GridViewIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Results Grid */}
        <Grid container spacing={3}>
          {searchResults.map((person, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
              <ProfileCard {...person} />
            </Grid>
          ))}
        </Grid>

        {/* Pagination Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton sx={{ bgcolor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <ChevronRightIcon />
            </IconButton>
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#004b49',
                color: 'white',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                fontWeight: 700
              }}
            >
              1
            </Paper>
            <IconButton sx={{ bgcolor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;