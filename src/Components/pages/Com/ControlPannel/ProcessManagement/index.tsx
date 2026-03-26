import React from 'react';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box, Typography } from '@mui/material';

const ProcessManagement: React.FC = () => {
  return (
    <Box sx={{
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0'
      , bgcolor: "background.paper"
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Box sx={{
            bgcolor: '#0f4c3a',
            color: 'white',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex'
          }}>
            <AccountTreeIcon />
          </Box>
          <Box>
            <Typography sx={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700 }}>
              ניהול תהליכים
            </Typography>
            <Typography sx={{ margin: 0, fontSize: '13px' }}>
              עקוב אחר התקדמות תהליכי כוח אדם ביחידה
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography component="span" sx={{ fontSize: '11px' }}>
            בחר תהליך לביצוע
          </Typography>
          <Box
            component="select"
            sx={{
              padding: '8px 32px 8px 16px',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              fontFamily: 'inherit',
              fontWeight: 500,
              outline: 'none',
              fontSize: '14px',
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left 12px center',
              backgroundSize: '16px'
            }}
          >
            <option>ראיון פרידה ושחרור</option>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '48px', padding: '0 24px' }}>
        <Box sx={{ position: 'absolute', top: '15px', left: '24px', right: '24px', height: '2px', bgcolor: '#e2e8f0', zIndex: 1 }} />

        {/* Step 1: Completed */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative', gap: '12px' }}>
          <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#0f4c3a', border: '2px solid #0f4c3a', color: 'white' }}>
            <CheckCircleIcon sx={{ fontSize: 20 }} />
          </Box>
          <Typography sx={{ fontSize: '13px', color: '#0f4c3a', fontWeight: 600 }}>זימון לראיון</Typography>
        </Box>

        {/* Step 2: Completed */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative', gap: '12px' }}>
          <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#0f4c3a', border: '2px solid #0f4c3a', color: 'white' }}>
            <CheckCircleIcon sx={{ fontSize: 20 }} />
          </Box>
          <Typography sx={{ fontSize: '13px', color: '#0f4c3a', fontWeight: 600 }}>ביצוע ראיון</Typography>
        </Box>

        {/* Step 3: Active */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative', gap: '12px' }}>
          <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#ffffff', border: '2px solid #0f4c3a', color: '#0f4c3a', fontWeight: 600, fontSize: '14px' }}>
            3
          </Box>
          <Typography sx={{ fontSize: '13px', color: '#1e293b', fontWeight: 600 }}>חתימה על מסמכים</Typography>
        </Box>

        {/* Step 4: Pending */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, position: 'relative', gap: '12px' }}>
          <Box sx={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#ffffff', border: '2px solid #e2e8f0', color: '#94a3b8', fontWeight: 600, fontSize: '14px' }}>
            4
          </Box>
          <Typography sx={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>אישור סופי</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: '40px' }}>
        {/* Right List: Commander Tasks */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', margin: '0 0 8px', fontWeight: 600 }}>
            <CheckCircleIcon sx={{ fontSize: 18 }} /> משימות מפקד לשלב זה
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#f8fafc', border: '1px solid #f1f5f9', color: '#1e293b' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: '#0f4c3a', mr: -0.5, ml: 1, fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>קביעת מועד לראיון פרידה</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#f8fafc', border: '1px solid #f1f5f9', color: '#1e293b' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: '#0f4c3a', mr: -0.5, ml: 1, fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>ביצוע הראיון בפועל</Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#ffffff', border: '1px solid #e2e8f0', color: '#64748b' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RadioButtonUncheckedIcon sx={{ color: '#cbd5e1', mr: -0.5, ml: 1, fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>חתימה דיגיטלית על המלצת מפקד</Typography>
            </Box>
          </Box>
        </Box>

        {/* Left List: Required Documents */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', margin: '0 0 8px', fontWeight: 600 }}>
            <ListAltIcon sx={{ fontSize: 18 }} /> מסמכים נדרשים להעלאה
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#ecfdf5', border: '1px solid #a7f3d0' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1e293b' }}>
              <VerifiedUserIcon sx={{ color: '#10b981', fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>טופס 1004 (סיכום ראיון)</Typography>
            </Box>
            <Typography component="span" sx={{ bgcolor: '#a7f3d0', color: '#065f46', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>
              הועלה
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#f8fafc', border: '1px solid #f1f5f9' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1e293b' }}>
              <AttachFileIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>עדכון סיווג ביטחוני חתום</Typography>
            </Box>
            <Box component="button" sx={{ bgcolor: 'transparent', border: 'none', color: '#0f4c3a', fontWeight: 600, fontSize: '12px', cursor: 'pointer', p: 0, '&:hover': { textDecoration: 'underline' } }}>
              לחץ להעלאה
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '20px', fontSize: '14px', bgcolor: '#f8fafc', border: '1px solid #f1f5f9' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1e293b' }}>
              <AttachFileIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px' }}>טופס טיולים פנימי</Typography>
            </Box>
            <Box component="button" sx={{ bgcolor: 'transparent', border: 'none', color: '#0f4c3a', fontWeight: 600, fontSize: '12px', cursor: 'pointer', p: 0, '&:hover': { textDecoration: 'underline' } }}>
              לחץ להעלאה
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessManagement;
