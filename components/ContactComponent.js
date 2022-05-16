import ReCAPTCHA from 'react-google-recaptcha'
import { createRef, useState } from 'react'
import styled from 'styled-components'
import { Grid, Card, TextField, Button } from '@material-ui/core'

const Container = styled.div`
	max-width: 1200px;
	margin: auto;
`

const Title = styled.h1`
	text-align: center;
	font-size: 50px;
`

const TextContainer = styled.div`
	width: 90%;
	margin: auto;
`

const SubmitContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const ButtonContainer = styled.div`
	margin: 15px auto 20px;

	p {
		font-size: 18px;
		margin: 0;
	}
`

const ContactComponent = () => {
	const recaptchaRef = createRef()
	const [isVerified, setIsVerified] = useState(false)

	const handleReCAPTCHAChange = () => {
		setIsVerified(true)
	}

	const paddingVal = { padding: '20px' }
	const widthVal = { width: '100%' }
	const buttonStyle = {
		backgroundColor: 'black',
		color: 'white',
	}
	const disabledButtonStyle = {
		backgroundColor: '#808080',
	}

	return (
		<Container>
			<Card square>
				<Title>Contact Me</Title>
				<form
					action="https://getform.io/f/0c275e41-f65d-45d1-9386-a63e444f1be4"
					method="POST"
				>
					<TextContainer>
						<Grid container>
							<Grid item xs={12} md={6} style={paddingVal}>
								<TextField
									label="Name"
									type="text"
									name="name"
									variant="outlined"
									style={widthVal}
									disabled
								/>
							</Grid>
							<Grid item xs={12} md={6} style={paddingVal}>
								<TextField
									label="Email"
									type="email"
									name="email"
									variant="outlined"
									style={widthVal}
									disabled
								/>
							</Grid>
							<Grid item xs={12} style={paddingVal}>
								<TextField
									label="Message"
									type="text"
									name="message"
									variant="outlined"
									multiline
									rows={4}
									style={widthVal}
									disabled
								/>
							</Grid>
							<SubmitContainer>
								<ReCAPTCHA
									ref={recaptchaRef}
									size="normal"
									sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
									onChange={handleReCAPTCHAChange}
								/>
								<ButtonContainer>
									<Button
										variant="contained"
										type="submit"
										style={isVerified ? buttonStyle : disabledButtonStyle}
										disabled={!isVerified}
									>
										<p>submit</p>
									</Button>
								</ButtonContainer>
							</SubmitContainer>
						</Grid>
					</TextContainer>
				</form>
			</Card>
		</Container>
	)
}

export default ContactComponent
