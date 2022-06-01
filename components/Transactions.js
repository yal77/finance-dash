import {
	Flex,
	Heading,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	Td,
	Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../hooks";
import { Line } from "react-chartjs-2";
import Chart from "./Chart";
import { useColorModeValue } from "@chakra-ui/react";
import TransactionRow from "./TransactionRow";

export default function Transactions({ user }) {
	const bgColor = useColorModeValue("gray.50", "gray.900");

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
			<Flex flexDir="row" align="flex-end" gap="1rem">
				<Heading fontSize="3xl">Transactions</Heading>
				<Text>May, 2022</Text>
			</Flex>
			<Table variant="unstyled">
				<Thead color="gray">
					<Th>Transaction Name</Th>
					<Th>Category</Th>
					<Th isNumeric>Cashback</Th>
					<Th isNumeric>Amount</Th>
				</Thead>
				<Tbody>
					<TransactionRow
						name="Amazon"
						date="May 3, 2022 at 4:50pm"
						category="Shopping"
						cashback="+$5"
						amount="-$50"
						src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
					/>
				</Tbody>
			</Table>
		</Flex>
	);
}
