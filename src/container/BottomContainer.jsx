import React from 'react';
import { Bottom, Button, Hr } from '../components';

const BottomContainer = () => {
	return (
		<Bottom>
			<Bottom.Inner>
				<Bottom.TextAndPrice>
					<Bottom.Text>SubTotal</Bottom.Text>
					<Bottom.Price>#2,497.00</Bottom.Price>
				</Bottom.TextAndPrice>
				<Bottom.TextAndPrice>
					<Bottom.Text>Estimated TAX</Bottom.Text>
					<Bottom.Price>#119.64</Bottom.Price>
				</Bottom.TextAndPrice>
				<Bottom.TextAndPrice>
					<Bottom.Text>
						Promotional Code:
						<Bottom.SmallText>Z4KXLM94</Bottom.SmallText>
					</Bottom.Text>
					<Bottom.Price>#119.64</Bottom.Price>
				</Bottom.TextAndPrice>
			</Bottom.Inner>
			<Hr />
			<Button>
				<Button.CompleteButton>Complete payment</Button.CompleteButton>
				<Bottom.TotalPrice>
					<Bottom.Total>Total:</Bottom.Total>
					#2556.64
				</Bottom.TotalPrice>
			</Button>
		</Bottom>
	);
};

export default BottomContainer;
