import Link from 'next/link'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
	margin-right: 20px;
`

const NavButton = styled(Button)`
	height: 40px;
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
					<NavButton variant="contained" style={{ background: 'white' }}>
						<ButtonText>{item[0]}</ButtonText>
					</NavButton>
				</Link>
			))}
		</Container>
	)
}

export default ButtonsDesk
