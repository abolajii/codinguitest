import styled from 'styled-components';
import { mobile } from '../responsive/responsive';

export const Container = styled.div`
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Inner = styled.div`
	margin: 10px 0;
`;

export const AddCardButton = styled.button`
	width: 100%;
	background-color: #067df3;
	color: #eefffe;
	outline: none;
	border: none;
	font-size: 14px;
	padding: 15px 0;
	cursor: pointer;
	border-radius: 4px;

	${mobile({ width: '98%' })}
`;

export const CompleteButton = styled.button`
	color: #eefffe;
	background-color: #067df3;
	outline: none;
	border: none;
	font-weight: 500;
	font-size: 16px;
	padding: 15px 0;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	border-radius: 4px;
	padding: 15px;
	width: 240px;
	${mobile({ width: '200px' })}
`;
