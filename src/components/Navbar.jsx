import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

const links = [
	{ name: 'Home', to: '/' },
	{ name: 'Counter', to: '/counter' },
	{ name: 'Posts', to: '/posts' },
	{ name: 'Jotai', to: '/jotai' },
	{ name: 'Search Params', to: '/search-params' },
	{ name: 'AG Grid', to: '/grid' },
	{ name: 'RHF', to: '/rhf' },
	{ name: 'MUI Form', to: '/mui-form' },
	{ name: 'Shadow', to: '/shadow' }
];

function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='navitems'>
				{links.map(({ to, name }) => (
					<li key={to}>
						<NavLink to={to}>{name}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
