import React from "react";
import { Avatar, Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlinePieChart } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../hooks";

export default function Sidebar({ user }) {
	const bgColor = useColorModeValue("#1f1f1f", "#000");
	const textColor = useColorModeValue("#fff", "gray.100");
	const router = useRouter();
	const { setToken } = useAuth("");

	const logout = async () => {
		setToken("");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};
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
						<Link href="/">
							<Button
								colorScheme={
									router.pathname == "/" ? "red" : "teal"
								}
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
						</Link>
						<Link href="/credit">
							<Button
								colorScheme={
									router.pathname == "/credit"
										? "red"
										: "teal"
								}
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
						</Link>
						<Link href="wallet">
							<Button
								colorScheme={
									router.pathname == "/wallet"
										? "red"
										: "teal"
								}
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
						</Link>
						<Link href="/services">
							<Button
								colorScheme={
									router.pathname == "/services"
										? "red"
										: "teal"
								}
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
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Flex flexDir="column" gap="1rem" my="1rem">
				<Flex
					flexDir="row"
					align="center"
					gap={3}
					display={["none", "none", "flex", "flex", "flex"]}
				>
					<Avatar
						name={user.firstName}
						src="https://bit.ly/dan-abramov"
					></Avatar>
					<Text
						align="center"
						size="md"
						fontStyle="normal"
						color={textColor}
					>
						{user.firstName + " " + user.lastName}
					</Text>
				</Flex>
				<Button onClick={() => logout()}>Log Out</Button>
			</Flex>
		</Flex>
	);
}
