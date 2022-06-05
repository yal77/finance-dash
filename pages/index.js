import { Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import ProtectedPage from "../components/ProtectedPage";
import { useAuth } from "../hooks";
import Sidebar from "../components/Sidebar";
import Maindash from "../components/Maindash";
import { useColorMode } from "@chakra-ui/react";
import CardSection from "../components/CardSection";
import DashPage from "../components/DashPage";

export default function Home({ children }) {
	const { user, setUser } = useAuth();
	return (
		<DashPage user={user}>
			<Maindash user={user} />
			<CardSection />
		</DashPage>
	);
}
