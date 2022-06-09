import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "./Chart";
import { useColorModeValue } from "@chakra-ui/react";

export default function BalanceGraph() {
	const bgColor = useColorModeValue("gray.100", "gray.900");

	return (
		<Flex
			w="90%"
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
						$5,300.00
					</Flex>
				</Text>
			</Flex>
			<Flex>
				<Chart />
			</Flex>
		</Flex>
	);
}
