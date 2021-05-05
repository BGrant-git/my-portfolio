import '../styles/globals.css'
import StoreContextProvider from '../components/store/context'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
	return (
		<StoreContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</StoreContextProvider>
	)
}

export default MyApp
