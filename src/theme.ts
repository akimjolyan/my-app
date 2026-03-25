import { createTheme, PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  direction: 'rtl',
  palette: {
    mode,
    primary: {
      main: '#004b49', // Original Dashboard Teal
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'light' ? '#1e293b' : '#94a3b8', // Slate Navy / Muted Slate
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0f172a', // Light Slate / Deep Navy
      paper: mode === 'light' ? '#ffffff' : '#1e293b',   // White / Slate Navy
    },
    success: {
      main: '#22c55e',
    },
    warning: {
      main: '#f59e0b',
    },
    error: {
      main: '#ef4444',
    },
    text: {
      primary: mode === 'light' ? '#1e293b' : '#f8fafc',
      secondary: mode === 'light' ? '#64748b' : '#94a3b8',
    },
    grey: {
      50: mode === 'light' ? '#f9fafb' : '#1e293b',
      100: mode === 'light' ? '#f1f5f9' : '#0f172a',
      200: mode === 'light' ? '#e2e8f0' : '#334155',
      300: mode === 'light' ? '#cbd5e1' : '#475569',
    }
  },
  typography: {
    fontFamily: '"Assistant", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 800 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 700 },
    subtitle2: { fontWeight: 700 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
    button: {
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: "1em !important",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill shape for that dashboard feel
          padding: '8px 24px',
          fontWeight: 700,
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
          },
        },
        text: {
          '&:hover': {
            backgroundColor: 'rgba(0, 75, 73, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: mode === 'light' ? '1px solid #f0f0f0' : '1px solid #334155',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          border: mode === 'light' ? '1px solid #f0f0f0' : '1px solid #334155',
          borderRadius: 14,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: mode === 'light' ? '1px solid #f1f5f9' : '1px solid #334155',
        },
        head: {
          backgroundColor: mode === 'light' ? '#f9fafb' : '#1e293b',
          color: mode === 'light' ? '#64748b' : '#94a3b8',
          fontWeight: 'bold',
        }
      }
    }
  },
});

export default getTheme;
