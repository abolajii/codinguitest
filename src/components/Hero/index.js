import React from 'react';

import {
	Container,
	GridContainer,
	Image,
	ImageContainer,
	Inner,
	LeftGrid,
	MasterContainer,
	RightGrid,
	SmallImage,
	SmallImageContainer,
	SmallText,
	Text,
} from './styles';

const Hero = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Hero.Inner = function HeroInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Hero.GridContainer = function HeroGridContainer({ children, ...restProps }) {
	return <GridContainer {...restProps}>{children}</GridContainer>;
};

Hero.LeftGrid = function HeroLeftGrid({ children, ...restProps }) {
	return <LeftGrid {...restProps}>{children}</LeftGrid>;
};

Hero.RightGrid = function HeroRightGrid({ children, ...restProps }) {
	return <RightGrid {...restProps}>{children}</RightGrid>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Hero.SmallText = function HeroSmallText({ children, ...restProps }) {
	return <SmallText {...restProps}>{children}</SmallText>;
};

Hero.SmallImage = function HeroSmallImage({ ...restProps }) {
	return <SmallImage {...restProps} />;
};

Hero.SmallImageContainer = function HeroSmallImageContainer({
	children,
	...restProps
}) {
	return <SmallImageContainer {...restProps}>{children}</SmallImageContainer>;
};

Hero.ImageContainer = function HeroImageContainer({ children, ...restProps }) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Hero.MasterContainer = function HeroMasterContainer({
	children,
	...restProps
}) {
	return <MasterContainer {...restProps}>{children}</MasterContainer>;
};

Hero.Image = function HeroImage({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Hero;
