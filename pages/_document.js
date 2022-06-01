// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../components/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body style={{ fontFamily: "'Cairo', sans serif" }}>
					{/* 👇 Here's the script */}
					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
