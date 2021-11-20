import React from 'react';

import { Container, Inner, Text, UserContainer, UserImage } from './styles';

const Top = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Top.Inner = function TopInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Top.Text = function TopText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Top.UserContainer = function TopUserContainer({ children, ...restProps }) {
	return <UserContainer {...restProps}>{children}</UserContainer>;
};

Top.UserImage = function TopUserImage({ ...restProps }) {
	return <UserImage {...restProps} />;
};

export default Top;
