import styled from 'styled-components';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

function Home() {
	return (
		<>
			<Title tabIndex={0}>Home Page</Title>
			<Title>Styled Component Example</Title>
		</>
	);
}

export default Home;
