import Head from 'next/head'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'

import ProfileComponent from '../components/ProfileComponent'
import ProjectsComponent from '../components/ProjectsComponent'
import ToolsComponent from '../components/ToolsComponent'

const Home = () => {
	const motionVariants = {
		hidden: {
			scale: 0.9,
			opacity: 0,
			y: 100,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.3,
			},
			y: 0,
		},
	}

	return (
		<>
			<Head>
				<title>Ben Grant - Web Dev Portfolio</title>
			</Head>
			<div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={motionVariants}
				>
					<ProfileComponent />
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={motionVariants}
				>
					<ProjectsComponent />
				</motion.div>
				<div>
					<ToolsComponent />
				</div>
			</div>
		</>
	)
}

export default Home
