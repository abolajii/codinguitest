import React from 'react';
import styled from 'styled-components';
import { BottomContainer, HeroContainer, TopContainer } from './container';

const Container = styled.div`
	width: 100%;
	max-width: 1100px;
	margin: auto;
`;

const App = () => {
	return (
		<Container>
			<TopContainer />
			<HeroContainer />
			<BottomContainer />
		</Container>
	);
};

export default App;
