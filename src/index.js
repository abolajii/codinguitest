import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	font-family: 'Poppins', sans-serif;
}
`;

render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);
