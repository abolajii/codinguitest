import React from 'react';

import { AddCardButton, CompleteButton, Container, Inner } from './styles';

const Button = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Button.Inner = function ButtonInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Button.AddCardButton = function ButtonAddCardButton({
	children,
	...restProps
}) {
	return <AddCardButton {...restProps}>{children}</AddCardButton>;
};

Button.CompleteButton = function BottomCompleteButton({
	children,
	...restProps
}) {
	return <CompleteButton {...restProps}>{children}</CompleteButton>;
};

export default Button;
