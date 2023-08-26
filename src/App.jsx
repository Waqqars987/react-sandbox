import Navbar from './components/Navbar';
import SkipLink from './components/SkipLink';
import AppRoutes from './AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	return (
		<>
			<CssBaseline />

			<SkipLink />

			<Navbar />

			{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
			<main id='main-content' tabIndex={0}>
				<AppRoutes />
			</main>
		</>
	);
}

export default App;
