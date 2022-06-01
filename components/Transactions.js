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
			<Flex overflow="auto">
				<Table variant="unstyled" width="100%">
					<Thead color="gray">
						<Th>Transaction Name</Th>
						<Th>Category</Th>
						<Th isNumeric>Cashback</Th>
						<Th isNumeric>Amount</Th>
					</Thead>
					<Tbody>
						<TransactionRow
							name="Amazon"
							date="May 25, 2022 at 4:50pm"
							category="Shopping"
							cashback="+$5"
							amount="-$50"
							src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
						/>
						<TransactionRow
							name="Deliveroo"
							date="May 21, 2022 at 2:20pm"
							category="Food and Drink"
							cashback="+$2"
							amount="-$24"
							src="https://www.apkmirror.com/wp-content/uploads/2019/04/5cadfa39553b3.png"
						/>
						<TransactionRow
							name="Netflix"
							date="May 18, 2022 at 8:50pm"
							category="Entertainment"
							cashback="+$2"
							amount="-$20"
							avatarColor="#000"
							src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
						/>
						<TransactionRow
							name="Deliveroo"
							date="May 15, 2022 at 2:20pm"
							category="Food and Drink"
							cashback="+$2"
							amount="-$24"
							src="https://www.apkmirror.com/wp-content/uploads/2019/04/5cadfa39553b3.png"
						/>
					</Tbody>
				</Table>
			</Flex>
		</Flex>
	);
}
