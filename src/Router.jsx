import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import JotaiExample from './pages/JotaiExample';
import Posts from './pages/Posts';
import Post from './components/Post';
import SearchParams from './pages/SearchParams';
import AgGrid from './pages/Grid';
import RHF from './pages/ReactHookForm';
import MuiForm from './pages/MuiForm';
import RootLayout from './RootLayout';

const Counter = lazy(() => import('./pages/Counter'));

const RequireAuth = ({ isAuth }) => (isAuth ? <Outlet /> : <Navigate to='/' replace={true} />);

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
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

			<Route element={<RequireAuth isAuth={false} />}>
				<Route path='/test-1' element={<h1>test 1</h1>} />
				<Route path='/test-2' element={<h1>test 2</h1>} />
			</Route>

			<Route path='*' element={<h1>404</h1>} />
		</Route>
	)
);
