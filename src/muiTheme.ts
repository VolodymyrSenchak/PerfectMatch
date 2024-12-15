import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f06292',

    },
    secondary: {
      main: '#f50057',
    },
    divider: '#f06292'
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF40',
          borderRadius: 16,
        }
      }
    },
  }
});
