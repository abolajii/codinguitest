import React from 'react';

import {
	Container,
	Inner,
	Price,
	Text,
	TotalPrice,
	TextAndPrice,
	SmallText,
	Total,
} from './styles';

const Bottom = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Bottom.Inner = function BottomInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Bottom.Text = function BottomText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Bottom.SmallText = function BottomSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Bottom.Price = function BottomPrice({ children, ...restProps }) {
	return <Price {...restProps}>{children}</Price>;
};

Bottom.TotalPrice = function BottomTotalPrice({ children, ...restProps }) {
	return <TotalPrice {...restProps}>{children}</TotalPrice>;
};

Bottom.Total = function BottomTotal({ children, ...restProps }) {
	return <Total {...restProps}>{children}</Total>;
};

Bottom.TextAndPrice = function BottomTextAndPrice({ children, ...restProps }) {
	return <TextAndPrice {...restProps}>{children}</TextAndPrice>;
};

export default Bottom;
