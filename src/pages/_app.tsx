import "../styles/globals.css"

import type { AppProps } from "next/app"

import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../misc/theme"

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
