import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { AuthProvider } from "../hooks";
import { theme } from "../components/theme";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</AuthProvider>
	);
}

export default MyApp;
