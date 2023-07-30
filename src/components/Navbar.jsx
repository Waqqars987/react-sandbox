import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const links = [
	{ name: 'Home', to: '/' },
	{ name: 'Counter', to: '/counter' },
	{ name: 'Posts', to: '/posts' },
	{ name: 'Jotai', to: '/jotai' }
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
