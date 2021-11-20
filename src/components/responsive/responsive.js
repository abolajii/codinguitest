import { css } from 'styled-components';

export const tabletAndMobile = (props) => {
	return css`
		@media (max-width: 793px) {
			${props}
		} ;
	`;
};

export const mobile = (props) => {
	return css`
		@media (max-width: 380px) {
			${props}
		} ;
	`;
};
