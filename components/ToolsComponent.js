import styled from 'styled-components'
import { Grid, Card } from '@material-ui/core/'

const images = [
	'/images/react-icon.png',
	'/images/gatsby-icon.png',
	'/images/next-icon.png',
	'/images/github-icon.png',
	'/images/shopify-icon.png',
	'/images/google-icon.png',
	'/images/netl-icon.png',
	'/images/vercel-icon.png',
]

const Container = styled.div`
	margin: 20px auto;
	max-width: 1200px;

	@media (max-width: 960px) {
		width: 95%;
	}
`

const Title = styled.h1`
	text-align: center;
	font-size: 46px;
`

const Img = styled.img`
	width: 100%;
`

const ToolsComponent = () => {
	return (
		<Container>
			<Card square>
				<Title>Some Of The Tools I use</Title>
				<Grid
					container
					item
					xs={12}
					justify="center"
					alignItems="center"
					direction="row"
					style={{ padding: '0 20px' }}
				>
					{images.map((item, i) => (
						<Grid item xs={4} sm={3} key={i} style={{ padding: '0 3%' }}>
							<Img src={item} />
						</Grid>
					))}
				</Grid>
			</Card>
		</Container>
	)
}

export default ToolsComponent
