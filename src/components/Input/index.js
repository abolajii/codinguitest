import React from 'react';

import {
	Container,
	GridContainer,
	Inner,
	InputBox,
	Label,
	LeftGrid,
	RadioAndText,
	RadioInput,
	RightGrid,
	StyledInput,
	StyledInputContainer,
	Text,
} from './styles';

const Input = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Input.Inner = function InputInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Input.GridContainer = function InputGridContainer({ children, ...restProps }) {
	return <GridContainer {...restProps}>{children}</GridContainer>;
};

Input.LeftGrid = function InputLeftGrid({ children, ...restProps }) {
	return <LeftGrid {...restProps}>{children}</LeftGrid>;
};

Input.RightGrid = function InputRightGrid({ children, ...restProps }) {
	return <RightGrid {...restProps}>{children}</RightGrid>;
};

Input.InputBox = function InputInputBox({ children, ...restProps }) {
	return <InputBox {...restProps}>{children}</InputBox>;
};

Input.StyledInputContainer = function InputStyledInputContainer({
	children,
	...restProps
}) {
	return <StyledInputContainer {...restProps}>{children}</StyledInputContainer>;
};

Input.StyledInput = function InputStyledInput({ ...restProps }) {
	return <StyledInput {...restProps} />;
};

Input.Text = function InputText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Input.Label = function InputLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Input.RadioInput = function InputRadioInput({ ...restProps }) {
	return <RadioInput {...restProps} />;
};

Input.RadioAndText = function InputRadioAndText({ children, ...restProps }) {
	return <RadioAndText {...restProps}>{children}</RadioAndText>;
};

export default Input;
