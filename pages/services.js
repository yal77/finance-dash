import { Flex, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import DashPage from "../components/DashPage";
import ServiceCard from "../components/ServiceCard";

export default function services() {
	return (
		<DashPage>
			<Flex w="100%" p="3rem" flexDir="column">
				<Heading>Services</Heading>
				<Wrap spacing="1rem">
					<ServiceCard />
					<ServiceCard />
				</Wrap>
			</Flex>
		</DashPage>
	);
}
