import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#004b49', // Original Dashboard Teal
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1e293b', // Slate Navy
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
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
      primary: '#1e293b',
      secondary: '#64748b',
    },
    grey: {
      50: '#f9fafb',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
    }
  },
  typography: {
    fontFamily: '"Assistant", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: { fontWeight: 800, color: '#1e293b' },
    h6: { fontWeight: 700, color: '#1e293b' },
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
          border: '1px solid #f0f0f0',
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
          border: '1px solid #f0f0f0',
          borderRadius: 14,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #f1f5f9',
        },
        head: {
          backgroundColor: '#f9fafb',
          color: '#64748b',
          fontWeight: 'bold',
        }
      }
    }
  },
});

export default theme;
