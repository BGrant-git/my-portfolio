import { createContext, useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const [navLinks] = useState([
		{
			0: 'About Me',
			1: '#',
		},
		{
			0: 'Projects',
			1: '#',
		},
		{
			0: 'Contact',
			1: '#',
		},
	])

	return (
		<StoreContext.Provider value={{ navLinks: [navLinks] }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
