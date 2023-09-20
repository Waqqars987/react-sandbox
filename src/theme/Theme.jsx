import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Poppins300 from '../assets/fonts/Poppins-300.ttf';
import Poppins300Italic from '../assets/fonts/Poppins-300Italic.ttf';
import Poppins400 from '../assets/fonts/Poppins-400.ttf';
import Poppins400Italic from '../assets/fonts/Poppins-400Italic.ttf';
import Poppins500 from '../assets/fonts/Poppins-500.ttf';
import Poppins500Italic from '../assets/fonts/Poppins-500Italic.ttf';
import Poppins700 from '../assets/fonts/Poppins-700.ttf';
import Poppins700Italic from '../assets/fonts/Poppins-700Italic.ttf';

const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
		button: {
			textTransform: 'none'
		},
		overline: {
			textTransform: 'none'
		}
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'Poppins';
					font-style: normal;
					font-weight: 300;
					src: url(${Poppins300}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: italic;
					font-weight: 300;
					src: url(${Poppins300Italic}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: normal;
					font-weight: 400;
					src: url(${Poppins400}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: italic;
					font-weight: 400;
					src: url(${Poppins400Italic}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: normal;
					font-weight: 500;
					src: url(${Poppins500}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: italic;
					font-weight: 500;
					src: url(${Poppins500Italic}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: normal;
					font-weight: 700;
					src: url(${Poppins700}) format('truetype');
				}
				@font-face {
					font-family: 'Poppins';
					font-style: italic;
					font-weight: 700;
					src: url(${Poppins700Italic}) format('truetype');
				}
			`
		}
	}
});

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default Theme;
