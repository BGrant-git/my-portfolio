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

const ContactComponent = () => {
	const paddingVal = { padding: '20px' }
	const widthVal = { width: '100%' }
	const messageBoxStyle = {
		margin: '0 auto 20px',
		fontSize: '18px',
	}

	return (
		<Container>
			<Card square>
				<Title>Contact Me</Title>
				<form>
					<TextContainer>
						<Grid container>
							<Grid item xs={12} md={6} style={paddingVal}>
								<TextField
									id="name"
									label="Name"
									variant="outlined"
									style={widthVal}
								/>
							</Grid>
							<Grid item xs={12} md={6} style={paddingVal}>
								<TextField
									id="Email"
									label="Email"
									variant="outlined"
									style={widthVal}
								/>
							</Grid>
							<Grid item xs={12} style={paddingVal}>
								<TextField
									id="message"
									label="Message"
									variant="outlined"
									multiline
									rows={4}
									style={widthVal}
								/>
							</Grid>
							<Button variant="contained" style={messageBoxStyle}>
								submit
							</Button>
						</Grid>
					</TextContainer>
				</form>
			</Card>
		</Container>
	)
}

export default ContactComponent
