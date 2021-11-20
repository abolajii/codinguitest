import styled from 'styled-components';
import { mobile } from '../responsive/responsive';

export const Container = styled.div``;

export const Inner = styled.div``;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	margin-top: 20px;

	${mobile({ gridTemplateColumns: 'repeat(2, 180px)', gap: '10px' })}
`;

export const LeftGrid = styled.div``;

export const RightGrid = styled.div``;

export const InputBox = styled.div`
	margin-bottom: 30px;
`;

export const Label = styled.label`
	margin-bottom: 3px;
	font-weight: 500;
	font-size: 15px;
	color: #090c0d;
`;

export const StyledInputContainer = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #bcbcbc;
	padding: 14px 10px;
	margin-top: 5px;
	background: #f7f7f7;
	border-radius: 3px;
`;

export const StyledInput = styled.input`
	width: 100%;
	background-color: transparent;
	outline: none;
	border: none;

	&::placeholder {
		color: #867c79;
	}
`;

export const Text = styled.p`
	font-size: 14px;
	font-weight: 500;
`;

export const RadioInput = styled.input`
	margin-right: 4px;
`;

export const RadioAndText = styled.div`
	display: flex;
	align-items: center;
`;
