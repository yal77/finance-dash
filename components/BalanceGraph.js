import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../hooks";
import { Line } from "react-chartjs-2";
import Chart from "./Chart";
import { useColorModeValue } from "@chakra-ui/react";

export default function BalanceGraph() {
	const { user, setUser } = useAuth();
	const bgColor = useColorModeValue("gray.50", "gray.900");

	return (
		<Flex
			w="80%"
			bgColor={bgColor}
			borderRadius="0.5rem"
			boxShadow="md"
			flexDir="column"
			p="1rem"
			gap={5}
			alignSelf="center"
		>
			<Flex flexDir="row">
				<Text fontSize="lg">
					My Balance:{" "}
					<Flex fontWeight="bold" display="inline-flex">
						{user.balance}
					</Flex>
				</Text>
			</Flex>
			<Flex>
				<Chart />
			</Flex>
		</Flex>
	);
}
