import { SearchIcon } from "@chakra-ui/icons";
import {
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/fi";

export default function CardSection() {
	return (
		<Flex flexDir="column" align="center" w="35%" gap="1rem" p="4rem 1rem">
			<Flex flexDir="row" w="100%" justify="center" gap="1rem">
				<InputGroup w="70%">
					<InputLeftElement pointerEvents="none">
						<SearchIcon color="gray.300" />
					</InputLeftElement>
					<Input placeholder="Search" width="100%" />
				</InputGroup>
				<IconButton icon={<FiBell />} borderRadius="100%" />
			</Flex>
			<Heading w="80%">My Cards</Heading>
			<Flex></Flex>
		</Flex>
	);
}
