import { createMuiTheme } from '@material-ui/core/styles'

import * as Colors from './colors'

export const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      dark: Colors.Common.White,
      main: Colors.Common.White,
      light: Colors.Common.White,
      contrastText: Colors.Common.White
    },
    secondary: {
      dark: Colors.Common.Black,
      main: Colors.Common.Black,
      light: Colors.Common.Black,
      contrastText: Colors.Common.Black
    },
    grey: {
      50: Colors.Grey.MidGrey,
      100: Colors.Grey.MidGrey, 
      200: Colors.Grey.MidGrey, 
      300: Colors.Grey.MidGrey, 
      400: Colors.Grey.MidGrey, 
      500: Colors.Grey.MidGrey, 
      600: Colors.Grey.MidGrey, 
      700: Colors.Grey.MidGrey, 
      800: Colors.Grey.MidGrey, 
      900: Colors.Grey.MidGrey, 
      A100: Colors.Grey.MidGrey, 
      A200: Colors.Grey.MidGrey, 
      A400: Colors.Grey.MidGrey, 
      A700: Colors.Grey.MidGrey, 
    },
    shape: {
      borderRadius: 7,
    },
    overrides: {
      MuiCssBasekube: {
        '@global': {
          body: {
            backgroundColor: '#F1F1F1'
          }
        }
      }
    }
  }
})