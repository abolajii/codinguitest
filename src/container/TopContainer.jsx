import React from 'react';
import { Top, Hr } from '../components';
import userImg from '../assets/user-circle-regular.svg';

const TopContainer = () => {
	return (
		<Top>
			<Top.Inner>
				<Top.Text>TRIPS</Top.Text>
				<Top.Text>RECENTLY VIEWED</Top.Text>
				<Top.Text>BOOKING</Top.Text>
				<Top.UserContainer>
					<Top.UserImage src={userImg} />
				</Top.UserContainer>
			</Top.Inner>
			<Hr />
		</Top>
	);
};

export default TopContainer;
