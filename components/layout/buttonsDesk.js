import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-right: 20px;
`

const ButtonText = styled.p`
	font-weight: bold;
	font-size: 18px;
`

const ButtonsDesk = ({ navLinks }) => {
	return (
		<Container>
			{navLinks[0].map((item, i) => (
				<Link href={item[1]} key={i}>
					<Button
						variant="contained"
						style={{
							background: 'white',
							margin: ' 0 5px',
							height: '40px',
						}}
					>
						<ButtonText>{item[0]}</ButtonText>
					</Button>
				</Link>
			))}
		</Container>
	)
}

export default ButtonsDesk
