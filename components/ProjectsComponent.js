import styled from 'styled-components'
import { Grid, Card } from '@material-ui/core'
import Image from 'next/image'

import projectsData from '../public/text/projectsText'

const Container = styled.div`
	max-width: 1200px;
	margin: auto;
`

const Title = styled.h1`
	text-align: center;
	font-size: 50px;
`

const ItemContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	margin: 0 10px 20px;
`

const ImgContainer = styled.div`
	margin: auto;
`

const ItemTitleLink = styled.a`
	text-align: center;
	color: white;
	background-color: black;
	width: 100%;
	margin-bottom: 10px;
`

const Text = styled.p`
	text-align: justify;
	padding: 0 20px;
`

const ItemLink = styled.a`
	text-decoration: underline;
	color: purple;
`

const ProjectsComponent = () => {
	return (
		<Container>
			<Card square>
				<Title>Projects</Title>
				<Grid container>
					<Grid item xs={false} md={1} />
					{projectsData.map((item, i) => (
						<Grid item xs={12} md={5} key={i}>
							<ItemContainer square>
								<ItemTitleLink href={item.url}>
									<h1>{item.title}</h1>
								</ItemTitleLink>
								<ImgContainer>
									<a href={item.url} alt="">
										<Image
											src="/images/square.jpg"
											alt=""
											height={200}
											width={200}
										/>
									</a>
								</ImgContainer>
								{item.description.map((item, i) => (
									<Text key={i}>{item}</Text>
								))}

								<p style={{ paddingLeft: '20px' }}>
									URL:{' '}
									<ItemLink href={item.url} alt="">
										{item.url}
									</ItemLink>
								</p>
							</ItemContainer>
						</Grid>
					))}

					<Grid item xs={false} md={1} />
				</Grid>
			</Card>
		</Container>
	)
}

export default ProjectsComponent
