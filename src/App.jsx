import { Outlet } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Provider } from 'react-redux';
import { Stack } from '@mui/material';

import store from './store';
import Navbar from './components/Navbar';
import SkipLink from './components/SkipLink';
import Theme from './theme/Theme';

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Provider store={store}>
				<Theme>
					<SkipLink />
					<Navbar />

					{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
					<Stack id='main-content' tabIndex={0} component='main' p={1}>
						<Outlet />
					</Stack>
				</Theme>
			</Provider>
		</LocalizationProvider>
	);
}

export default App;
