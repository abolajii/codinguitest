import React from 'react';
import { Button, Hero, Hr, Input } from '../components';
import { MdDateRange } from 'react-icons/md';

import card from '../assets/master.jpeg';
import paypal from '../assets/cc-paypal-brands.svg';
import visa from '../assets/cc-visa-brands.svg';
import discover from '../assets/cc-discover-brands.svg';

const HeroContainer = () => {
	return (
		<Hero>
			<Hero.Inner>
				<Hero.GridContainer>
					<Hero.LeftGrid>
						<Hero.Text>Payment Information</Hero.Text>
						<Hero.SmallText>Choose your method of payment </Hero.SmallText>
						<Hero.MasterContainer>
							<Hero.Image src={card} />
						</Hero.MasterContainer>
					</Hero.LeftGrid>
					<Hero.RightGrid>
						<Hero.ImageContainer>
							<Hero.SmallImageContainer>
								<Hero.SmallImage src={visa} alt='visa' />
							</Hero.SmallImageContainer>
							<Hero.SmallImageContainer>
								<Hero.SmallImage src={discover} alt='discover' />
							</Hero.SmallImageContainer>
							<Hero.SmallImageContainer>
								<Hero.SmallImage src={paypal} alt='paypal' />
							</Hero.SmallImageContainer>
						</Hero.ImageContainer>

						{/* INPUT CONTAINER */}

						<Input>
							<Input.Inner>
								<Input.GridContainer>
									{/* LEFT */}
									<Input.LeftGrid>
										<Input.InputBox>
											<Input.Label>Credit Card Number</Input.Label>
											<Input.StyledInputContainer>
												<Input.StyledInput placeholder='432 5433 9382 1030' />
											</Input.StyledInputContainer>
										</Input.InputBox>
										<Input.InputBox>
											<Input.Label>Security Code</Input.Label>
											<Input.StyledInputContainer>
												<Input.StyledInput placeholder='420' />
											</Input.StyledInputContainer>
										</Input.InputBox>
									</Input.LeftGrid>

									{/* LEFT */}

									{/* RIGHT */}

									<Input.RightGrid>
										<Input.InputBox>
											<Input.Label>Expiration Date</Input.Label>
											<Input.StyledInputContainer>
												<Input.StyledInput placeholder='dd/mm/yyyy' />
												<MdDateRange />
											</Input.StyledInputContainer>
										</Input.InputBox>
										<Input.InputBox>
											<Input.Label>Postal Code</Input.Label>
											<Input.StyledInputContainer>
												<Input.StyledInput placeholder='420' />
											</Input.StyledInputContainer>
										</Input.InputBox>
									</Input.RightGrid>

									{/* RIGHT */}
								</Input.GridContainer>
							</Input.Inner>
						</Input>

						{/* INPUT ENDS */}
						<Input.RadioAndText>
							<Input.RadioInput type='radio' />
							<Input.Text>Use this card for next time purchase</Input.Text>
						</Input.RadioAndText>

						<Button.Inner>
							<Button.AddCardButton>Add Card</Button.AddCardButton>
						</Button.Inner>
					</Hero.RightGrid>
				</Hero.GridContainer>
			</Hero.Inner>
			<Hr />
		</Hero>
	);
};

export default HeroContainer;
