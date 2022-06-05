import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "@chakra-ui/react";
export default function ServiceCard({ title, description, CTA }) {
	const bgColor = useColorModeValue("gray.50", "gray.900");
	return (
		<Flex
			p="1rem"
			flexDir="column"
			bg={bgColor}
			borderRadius="1rem"
			maxW="400px"
			gap="1rem"
			boxShadow="md"
		>
			<Heading fontSize="2xl">{title}</Heading>
			<Text>{description}</Text>
			<Button colorScheme="teal">{CTA}</Button>
		</Flex>
	);
}
