import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
					<main id='main-content' tabIndex={0}>
						<Outlet />
					</main>
				</Theme>
			</Provider>
		</LocalizationProvider>
	);
}

export default App;
