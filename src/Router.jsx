import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import { LoginCallback, useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';

import Home from './pages/Home';
import JotaiExample from './pages/JotaiExample';
import Posts from './pages/Posts';
import Post from './components/Post';
import SearchParams from './pages/SearchParams';
import AgGrid from './pages/Grid';
import RHF from './pages/ReactHookForm';
import MuiForm from './pages/MuiForm';
import App from './App';
import Shadow from './pages/Shadow';

const Counter = lazy(() => import('./pages/Counter'));

const RequireAuth = () => {
	const { oktaAuth, authState } = useOktaAuth();

	useEffect(() => {
		if (!authState) return;

		if (!authState?.isAuthenticated) {
			const originalUri = toRelativeUrl(window.location.href, window.location.origin);
			oktaAuth.setOriginalUri(originalUri);
			oktaAuth.signInWithRedirect();
		}
	}, [oktaAuth, authState]);

	if (!authState || !authState?.isAuthenticated) {
		return <h1>Authenticating...</h1>;
	}

	return <Outlet />;
};

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<Home />} />

			<Route
				path='/login/callback'
				element={<LoginCallback loadingElement={<h1>Authenticating...</h1>} />}
			/>

			<Route element={<RequireAuth />}>
				<Route
					path='/counter'
					element={
						<Suspense fallback='loading'>
							<Counter />
						</Suspense>
					}
				/>
				<Route path='/posts' element={<Posts />}>
					{/* <Route index element={<Posts />} /> */}
					<Route path=':id' element={<Post />} />
					<Route path='' element={<h2>Select a post</h2>} />
				</Route>
				<Route
					path='/jotai'
					element={
						<Suspense fallback={<h2>Loading...</h2>}>
							<JotaiExample />
						</Suspense>
					}
				/>
				<Route path='/search-params' element={<SearchParams />} />
				<Route path='/grid' element={<AgGrid />} />
				<Route path='/rhf' element={<RHF />} />
				<Route path='/mui-form' element={<MuiForm />} />
				<Route path='/shadow' element={<Shadow />} />
			</Route>

			<Route path='*' element={<h1>404</h1>} />
		</Route>
	)
);
