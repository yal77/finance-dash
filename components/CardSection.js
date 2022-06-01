import { SearchIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { useColorModeValue } from "@chakra-ui/react";

export default function CardSection() {
	const [cardNo, setCardNo] = useState(1);
	const bgColor = useColorModeValue("gray.50", "gray.900");

	return (
		<Flex
			flexDir="column"
			align="center"
			w={["100%", "100%", "35%"]}
			minW={[null, null, "300px", "300px", "400px"]}
			gap="1rem"
			p="4rem 1rem"
			bgColor={bgColor}
		>
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
			{cardNo == 1 && (
				<Flex
					w="60%"
					bgGradient="linear(to-b, #2f2899, #a56995)"
					borderRadius="1rem"
					p="1rem"
					flexDir="column"
					gap="1rem"
					color="white"
				>
					<Text>Current Balance</Text>
					<Text fontSize="2xl" fontWeight="bold">
						$5,300.00
					</Text>
					<Text>**** **** **** 1549</Text>
					<Flex dir="row" gap="1rem">
						<Flex flexDir="column">
							<Text>Valid Thru</Text>
							<Text>12/23</Text>
						</Flex>
						<Flex flexDir="column">
							<Text>CVV</Text>
							<Text>***</Text>
						</Flex>
					</Flex>
				</Flex>
			)}
			{cardNo == 2 && (
				<Flex
					w="60%"
					bgGradient="linear(to-b, #428ac4, #e4d767)"
					borderRadius="1rem"
					p="1rem"
					flexDir="column"
					gap="1rem"
					color="white"
				>
					<Text>Current Balance</Text>
					<Text fontSize="2xl" fontWeight="bold">
						$5,300.00
					</Text>
					<Text>**** **** **** 1549</Text>
					<Flex dir="row" gap="1rem">
						<Flex flexDir="column">
							<Text>Valid Thru</Text>
							<Text>12/23</Text>
						</Flex>
						<Flex flexDir="column">
							<Text>CVV</Text>
							<Text>***</Text>
						</Flex>
					</Flex>
				</Flex>
			)}
			{cardNo == 3 && (
				<Flex
					w="60%"
					bgGradient="linear(to-b, #b9357e, #ee9d5a)"
					borderRadius="1rem"
					p="1rem"
					flexDir="column"
					gap="1rem"
				>
					<Text color="white">Current Balance</Text>
					<Text fontSize="2xl" fontWeight="bold" color="white">
						$5,300.00
					</Text>
					<Text color="white">**** **** **** 1549</Text>
					<Flex dir="row" gap="1rem" color="white">
						<Flex flexDir="column">
							<Text>Valid Thru</Text>
							<Text>12/23</Text>
						</Flex>
						<Flex flexDir="column">
							<Text>CVV</Text>
							<Text>***</Text>
						</Flex>
					</Flex>
				</Flex>
			)}
			<Flex gap="0.5rem">
				<Button
					size="xs"
					onClick={() => setCardNo(1)}
					{...(cardNo == 1
						? { colorScheme: "teal" }
						: { colorScheme: "gray" })}
					border="1px"
				/>
				<Button
					size="xs"
					onClick={() => setCardNo(2)}
					{...(cardNo == 2
						? { colorScheme: "teal" }
						: { colorScheme: "gray" })}
					border="1px"
				/>
				<Button
					size="xs"
					onClick={() => setCardNo(3)}
					{...(cardNo == 3
						? { colorScheme: "teal" }
						: { colorScheme: "gray" })}
					border="1px"
				/>
			</Flex>
		</Flex>
	);
}
