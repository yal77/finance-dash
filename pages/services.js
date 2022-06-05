import { Flex, Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import DashPage from "../components/DashPage";
import ServiceCard from "../components/ServiceCard";
import { useColorModeValue } from "@chakra-ui/react";

export default function services() {
	return (
		<DashPage>
			<Flex
				w="100%"
				p="3rem"
				flexDir="column"
				gap="1rem"
				h="auto"
				overflow="auto"
			>
				<Heading>Services</Heading>
				<Wrap spacing="1rem" p="1rem">
					<ServiceCard
						title={"Request new Credit Card"}
						description={
							"Request a new credit card for your account with minimal fees and full flexibility."
						}
						CTA="Register"
					/>
					<ServiceCard
						title={"Apply for car loan"}
						description="Enjoy your car now and pay later with our 1 year car loan. Starting from 0.5% interest "
						CTA="Apply Now"
					/>
				</Wrap>
			</Flex>
		</DashPage>
	);
}
