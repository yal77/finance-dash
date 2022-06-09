import { useAuth } from "../hooks";
import Maindash from "../components/Maindash";
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
