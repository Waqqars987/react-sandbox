import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import SkipLink from './components/SkipLink';
import Theme from './theme/Theme';

function Root() {
	return (
		<Theme>
			<SkipLink />
			<Navbar />

			{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
			<main id='main-content' tabIndex={0}>
				<Outlet />
			</main>
		</Theme>
	);
}

export default Root;
