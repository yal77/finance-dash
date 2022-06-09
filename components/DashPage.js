import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProtectedPage from "./ProtectedPage";
import Sidebar from "./Sidebar";
import { useAuth } from "../hooks";
import { useColorMode } from "@chakra-ui/react";

export default function DashPage({ children }) {
	const { colorMode, toggleColorMode } = useColorMode();
	const { user, setUser } = useAuth();
	return (
		<ProtectedPage>
			<IconButton
				aria-label="Toggle Mode"
				onClick={toggleColorMode}
				position="absolute"
				top="3"
				right="3"
			>
				{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			</IconButton>
			<Flex
				h={[null, null, "100vh"]}
				overflow="hidden"
				flexDir={["column", "column", "row"]}
				w="100%"
			>
				{/* Left Side */}
				<Sidebar user={user} />

				<Flex flexDir={["column", "column", "row"]} w="100%">
					{children}
				</Flex>
			</Flex>
		</ProtectedPage>
	);
}
