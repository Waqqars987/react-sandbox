import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import JotaiExample from './pages/JotaiExample';
import Posts from './pages/Posts';
import Post from './components/Post';
import SearchParams from './pages/SearchParams';

const Counter = lazy(() => import('./pages/Counter'));

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
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
			<Route path='*' element={<h1>404</h1>} />
		</Routes>
	);
}

export default AppRoutes;
