import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
`;

export const Inner = styled.div`
	padding: 20px 10px;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const Text = styled.p`
	margin-right: 20px;
	font-weight: 750;
	color: #555057;
	&:last-child {
		margin-right: 10px;
	}
`;

export const UserImage = styled.img``;

export const UserContainer = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 50%;
`;
