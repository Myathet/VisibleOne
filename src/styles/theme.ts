'use client';
import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#394060',
    },
    info: {
      main: '#0391D8',
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          fontSize: 12,
          backgroundColor: '#f5f5f5',
          color: '#606060',
          "& .MuiListItemIcon-root": {
            color: "inherit",
          },
          "& .MuiDivider-root": {
            backgroundColor: "currentColor",
            opacity: 0.3
          }
        }
      }
    },
  }
});