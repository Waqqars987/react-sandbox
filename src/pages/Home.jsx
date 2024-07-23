import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

function Home() {
	const params = useParams();
	console.log('🚀 ~ Home ~ params:', params);

	useEffect(() => {
		fetch('/config.json')
			.then(res => res.json())
			.then(config => console.log(config));
	}, []);

	return (
		<>
			<Title tabIndex={0}>Home Page</Title>
		</>
	);
}

export default Home;
