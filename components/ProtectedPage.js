import React from "react";
import {
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Wrap,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useAuth } from "../hooks";

export default function ProtectedPage({ children }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useAuth("");
	const { user, setUser } = useAuth("");
	const { balance, setBalance } = useAuth("");
	const loggedIn = token;

	const getName = () => {
		if (firstName && lastName) {
			return `${firstName} ${lastName}`;
		} else if (firstName) {
			return firstName;
		} else if (lastName) {
			return lastName;
		} else {
			return "";
		}
	};

	async function handleSubmit(e) {
		e.preventDefault();
		const msgBody = {
			email: email,
			password: password,
		};
		const res = await fetch("http://localhost:5000/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(msgBody),
		});
		const data = await res.json();
		console.log(data.accessToken);
		console.log(data.user);
		setToken(data.accessToken);
		setUser(data.user);
		if (typeof data.accessToken == "undefined") {
			alert("Invalid Credentials");
		}
	}
	return (
		<>
			{loggedIn ? (
				children
			) : (
				<Flex
					align="center"
					justify="center"
					width="100vw"
					height="100vh"
					direction="column"
				>
					<Flex
						width="50%"
						minW="330px"
						direction="column"
						justify="center"
						border="1px"
						align="center"
						padding="1.5rem 1rem"
						borderRadius="0.5rem"
						shadow="md"
					>
						<Heading marginBottom="1.5rem">Login</Heading>
						<form onSubmit={handleSubmit}>
							<FormControl
								as="div"
								display="flex"
								flexDir="column"
								width="90%"
								minW="300px"
								gap="0.3rem"
								alignItems="center"
							>
								<FormLabel
									htmlFor="email"
									alignSelf="flex-start"
								>
									Email
								</FormLabel>
								<Input
									id="email"
									type="email"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<FormLabel
									htmlFor="password"
									alignSelf="flex-start"
								>
									Password
								</FormLabel>
								<Input
									id="password"
									type="password"
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
								<Wrap
									align="center"
									justify="center"
									width="100%"
									my="1.5rem"
								>
									<Button
										colorScheme="teal"
										marginTop="1.5rem"
										maxW="fit-content"
										padding="0.5rem 1rem"
										type="submit"
										onClick={handleSubmit}
									>
										Access Dashboard
									</Button>
									<Link href="/Register">
										<Button
											colorScheme="teal"
											marginTop="1.5rem"
											maxW="fit-content"
											padding="0.5rem 1rem"
											variant="outline"
										>
											Register
										</Button>
									</Link>
								</Wrap>
							</FormControl>
						</form>
					</Flex>
				</Flex>
			)}
		</>
	);
}
