import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#10B981', // Green color matching the current theme
      light: '#34D399',
      dark: '#059669',
    },
    secondary: {
      main: '#6B7280', // Gray color
      light: '#9CA3AF',
      dark: '#374151',
    },
    background: {
      default: '#000000',
      paper: '#1F2937',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.75rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '50px',
          padding: '12px 24px',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #10B981 30%, #34D399 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #059669 30%, #10B981 90%)',
          },
        },
        outlined: {
          borderColor: '#10B981',
          color: '#10B981',
          '&:hover': {
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderColor: '#34D399',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1F2937',
          border: '1px solid #374151',
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            borderColor: '#10B981',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1F2937',
          border: '1px solid #374151',
        },
      },
    },
  },
}); 