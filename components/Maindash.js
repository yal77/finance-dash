import React from "react";
import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text,
	Wrap,
} from "@chakra-ui/react";
import { useAuth } from "../hooks";
import BalanceGraph from "./BalanceGraph";

export default function Maindash({ props }) {
	const { user, setUser } = useAuth();

	return (
		<Flex
			w="55%"
			p="3%"
			overflow="auto"
			minHeight="100vh"
			//border="1px"
			// borderColor="whiteAlpha.100"
			flexDir="column"
			gap="1.5rem"
		>
			<Heading size="xl" fontWeight="normal">
				Welcome back,{" "}
				<Flex fontWeight="bold" display="inline-flex">
					{user.firstName}
				</Flex>
			</Heading>
			<BalanceGraph />
		</Flex>
	);
}
