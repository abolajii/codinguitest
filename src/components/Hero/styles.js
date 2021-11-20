import styled from 'styled-components';
import { mobile } from '../responsive/responsive';

export const Container = styled.div`
	padding: 0 10px;
`;

export const Inner = styled.div`
	padding: 10px 0;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	${mobile({ gridTemplateColumns: '1fr' })}
`;

export const LeftGrid = styled.div`
	display: flex;
	flex-direction: column;
`;

export const RightGrid = styled.div``;

export const MasterContainer = styled.div`
	height: 250px;
	width: 80%;
	border-radius: 6px;
	overflow: hidden;
	${mobile({ width: '380px', overflow: 'hidden' })}
`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
	${mobile({ width: '90%', borderRadius: '6px' })}
`;

export const Text = styled.h2`
	font-size: 19px;
	color: #4b5264;
`;

export const SmallText = styled.p`
	color: #c7c7cb;
	margin-bottom: 6px;
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: end;
	margin: 10px;

	${mobile({ justifyContent: 'start' })}
`;

export const SmallImageContainer = styled.div`
	height: 40px;
	width: 40px;

	margin-right: 10px;
	&:last-child {
		margin-right: 0px;
	}
`;

export const SmallImage = styled.img`
	fill: blue;
`;
