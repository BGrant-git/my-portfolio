import styled from 'styled-components'
import { Grid, useMediaQuery, Card } from '@material-ui/core'
import Image from 'next/image'
import ReactTypingEffect from 'react-typing-effect'
import CallIcon from '@material-ui/icons/Call'

import bioText from '../public/text/bioText'

const RootContainer = styled.div`
	margin: 0 0 20px;
	padding-top: 100px;
`

const ContentContainer = styled.div`
	padding: 0 20px;
	max-width: 1200px;

	@media (max-width: 690px) {
		padding-top: 0;
	}
`

const Title = styled.h1`
	text-align: center;
	font-size: 50px;
`

const ImgContainer = styled(Card)`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	margin-bottom: 20px;
	filter: brightness(1.1);

	@media (max-width: 960px) {
		justify-content: center;
		width: 65%;
		margin: auto;
	}
`

const BioContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 0 20px;
	padding: 0 20px 20px;

	@media (max-width: 960px) {
		margin: 5px;
	}
`

const UList = styled.ul`
	list-style-type: none;
	padding: 0 20px;
	@media (max-width: 960px) {
		margin: 5px;
	}
`

const ListItem = styled.li`
	padding: 5px 0;
`

const ButtonContainer = styled.div`
	display: flex;

	@media (max-width: 690px) {
		flex-direction: column;
	}
`

const ButtonLinks = styled.a`
	width: 220px;
	margin-right: 10px;
	text-decoration: none;

	@media (max-width: 690px) {
		margin: auto;
	}
`

const MessageButton = styled.div`
	width: 100%;
	height: 50px;
	background-color: black;
	color: white;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	padding-top: 12px;
	font-weight: bold;
	margin: 10px 0 0;
	transition: ease-out 0.3s;
	box-shadow: inset 0 0 0 0 black;

	&:hover {
		box-shadow: inset 220px 0 0 0 lightgrey;
		color: black;
	}
`

const interests = bioText[0].interests

const shuffledInterests = interests
	.map((a) => ({ sort: Math.random(), value: a }))
	.sort((a, b) => a.sort - b.sort)
	.map((a) => a.value)

const ProfileComponent = () => {
	const matches = useMediaQuery('(max-width: 690px)')

	return (
		<RootContainer>
			<Grid container justify="center">
				<Card square>
					<ContentContainer>
						<Title>About Me</Title>
						<Grid container>
							<Grid item xs={12} md={5}>
								<ImgContainer square>
									<Image src="/images/bg.jpg" alt="" width={723} height={854} />
								</ImgContainer>
							</Grid>
							<Grid item xs={12} md={7}>
								<BioContainer>
									<h2>{bioText[0].header}</h2>
									{bioText[0].text.map((item, i) => (
										<p key={i}>{item}</p>
									))}
									<Grid container>
										<Grid item xs={12} sm={6}>
											<UList>
												{bioText[0].list1.map((item, i) => (
													<ListItem key={i}>
														<strong>{item[0]}</strong> {item[1]}
													</ListItem>
												))}
											</UList>
										</Grid>
										<Grid
											item
											xs={12}
											sm={6}
											style={matches ? { marginTop: '-10px' } : null}
										>
											<UList>
												{bioText[0].list2.map((item, i) => (
													<ListItem key={i}>
														<strong>{item[0]}</strong> {item[1]}
													</ListItem>
												))}
												<ListItem>
													<strong>Interests: </strong>
													<ReactTypingEffect
														text={shuffledInterests}
														speed={150}
														eraseSpeed={100}
														eraseDelay={1250}
														typingDelay={250}
													/>
												</ListItem>
												<ListItem>
													<strong>Links:</strong>{' '}
													{bioText[0].links.map((item, i) => (
														<a href={item[1]} key={i}>
															{item[0]}{' '}
														</a>
													))}
												</ListItem>
											</UList>
										</Grid>
									</Grid>
									<ButtonContainer>
										<ButtonLinks href="mailto:bengrant.home@gmail.com">
											<MessageButton variant="contained">
												SEND ME A MESSAGE
											</MessageButton>
										</ButtonLinks>
										<ButtonLinks href="tel:07949524345">
											<MessageButton
												variant="contained"
												style={{
													display: 'flex',
													justifyContent: 'center',
												}}
											>
												<CallIcon style={{ margin: '0 5px 0 -5px' }} /> CALL ME
											</MessageButton>
										</ButtonLinks>
									</ButtonContainer>
								</BioContainer>
							</Grid>
						</Grid>
					</ContentContainer>
				</Card>
			</Grid>
		</RootContainer>
	)
}

export default ProfileComponent
