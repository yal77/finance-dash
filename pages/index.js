import { Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProtectedPage from "../components/ProtectedPage";
import { useAuth } from "../hooks";
import Sidebar from "../components/Sidebar";
import Maindash from "../components/Maindash";
import { useColorMode } from "@chakra-ui/react";

export default function Home() {
	const { user, setUser } = useAuth();
	const { colorMode, toggleColorMode } = useColorMode();
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
			<Flex h="100vh" overflow="hidden" flexDir="row" w="100%">
				{/* Left Side */}
				<Sidebar user={user} />
				{/* Center */}
				<Maindash user={user} />
				<Flex></Flex>
			</Flex>
		</ProtectedPage>
	);
}
