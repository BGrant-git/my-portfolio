import { useContext } from 'react'
import styled from 'styled-components'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonsMob from './buttonsMob'
import ButtonsDesk from './buttonsDesk'

import { StoreContext } from '../store/context'

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: black;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 1;
`

const Title = styled.h1`
	margin-left: 40px;
	min-width: 200px;
`

const NavBar = () => {
	const { navLinks } = useContext(StoreContext)
	const matches = useMediaQuery('(max-width: 690px)')

	return (
		<Container>
			<Title>Ben Grant</Title>
			{matches ? (
				<ButtonsMob navLinks={navLinks} />
			) : (
				<ButtonsDesk navLinks={navLinks} />
			)}
		</Container>
	)
}

export default NavBar
