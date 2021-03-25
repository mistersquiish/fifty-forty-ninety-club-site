import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    h1: {
      color: 'white',
      fontFamily: 'Bodoni Moda',
      fontSize: '2.0rem',
      '@media (min-width:400px)': {
        fontSize: '3.0rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '5.0rem',
      },
    },
    h2: {
      fontSize: '1.4rem',
      '@media (min-width:400px)': {
        fontSize: '1.6rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.8rem',
      },
    },
    body2: {
      fontSize: '.60rem',
      '@media (min-width:400px)': {
        fontSize: '0.8rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
      margin: 0,
    },
    h5: {
      fontSize: '1.0rem',
      '@media (min-width:400px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
      margin: 0,
    },
    h6: {
      fontSize: '0.8rem',
      '@media (min-width:400px)': {
        fontSize: '1.0rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.2rem',
      },
      margin: 0,
    }
  }
});
// theme = responsiveFontSizes(theme);

export default theme;