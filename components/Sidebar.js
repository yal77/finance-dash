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
	Icon,
	Wrap,
} from "@chakra-ui/react";
import { AiOutlineHome, AiOutlinePieChart } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { getUser } from "./ProtectedPage";
import { useEffect } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Sidebar(props) {
	const bgColor = useColorModeValue("#1f1f1f", "#000");
	const textColor = useColorModeValue("#fff", "gray.100");
	return (
		<Flex
			bg={bgColor}
			w={["100%", "100%", "15%", "15%", "10%"]}
			flexDir="column"
			alignItems="center"
			gap={["50px", "50px"]}
			justifyContent="space-between"
			borderRightRadius="0.5rem"
			minW="200px"
		>
			<Flex justify="space-between" flexDir="column">
				<Heading
					mb={["10", "10", "100"]}
					mt="10"
					py="2"
					bgGradient="linear(to-l, #D7EBEB, #F4AFE9)"
					bgClip="text"
					fontSize="4xl"
					userSelect="none"
					fontWeight="700"
					//fontFamily="'Nunito', sans-serif"
				>
					stonks.io
				</Heading>
				<Flex flexDir="column" gap="1rem" align="center" mb="50">
					<Flex
						flexDir={["row", "row", "column"]}
						align="flex-start"
						gap="0.5rem"
					>
						<Button
							colorScheme="teal"
							variant="link"
							fontSize="xl"
							leftIcon={
								<Icon
									as={AiOutlineHome}
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}
								/>
							}
							py="0.5rem"
							px="0.5rem"
						>
							Home
						</Button>
						<Button
							colorScheme="teal"
							variant="link"
							fontSize="xl"
							leftIcon={
								<Icon
									as={AiOutlinePieChart}
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}
								/>
							}
							py="0.5rem"
							px="0.5rem"
						>
							Credit
						</Button>
						<Button
							colorScheme="teal"
							variant="link"
							fontSize="xl"
							leftIcon={
								<Icon
									as={BiWalletAlt}
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}
								/>
							}
							py="0.5rem"
							px="0.5rem"
						>
							Wallet
						</Button>
						<Button
							colorScheme="teal"
							variant="link"
							fontSize="xl"
							leftIcon={
								<Icon
									as={BsGrid}
									display={[
										"none",
										"none",
										"flex",
										"flex",
										"flex",
									]}
								/>
							}
							py="0.5rem"
							px="0.5rem"
						>
							Services
						</Button>
					</Flex>
				</Flex>
			</Flex>

			<Flex
				flexDir="row"
				align="center"
				my="30"
				gap={3}
				display={["none", "none", "flex", "flex", "flex"]}
			>
				<Avatar
					name={props.user.firstName}
					src="https://bit.ly/dan-abramov"
				></Avatar>
				<Text
					align="center"
					size="md"
					fontStyle="normal"
					color={textColor}
				>
					{props.user.firstName + " " + props.user.lastName}
				</Text>
			</Flex>
		</Flex>
	);
}
