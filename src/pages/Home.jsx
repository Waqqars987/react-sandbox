import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
function Home(props) {
	return (
		<>
			<Title tabIndex={0}>Home Page</Title>
			<Title>Lorem ipsum dolor sit amet.</Title>
		</>
	);
}

export default Home;
