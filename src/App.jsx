import Navbar from './components/Navbar';
import SkipLink from './components/SkipLink';
import AppRoutes from './AppRoutes';
import Theme from './theme/Theme';

function App() {
	return (
		<Theme>
			<SkipLink />
			<Navbar />

			{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
			<main id='main-content' tabIndex={0}>
				<AppRoutes />
			</main>
		</Theme>
	);
}

export default App;
