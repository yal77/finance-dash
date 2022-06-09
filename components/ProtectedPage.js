import React, { useEffect } from "react";
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Wrap,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../hooks";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/react";

export default function ProtectedPage({ children }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { token, setToken } = useAuth("");
	const { setUser } = useAuth("");
	const loggedIn = token;
	const router = useRouter();

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

	//check local storage for token
	const checkToken = () => {
		const token = localStorage.getItem("token");
		if (token) {
			setToken(token);
			setUser(JSON.parse(localStorage.getItem("user")));
		}
		setChecked(true);
	};

	useEffect(() => {
		checkToken();
	}, []);

	const [checked, setChecked] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		const msgBody = {
			email: email,
			password: password,
		};
		const res = await fetch("http://192.168.70.3:5000/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(msgBody),
		});
		const data = await res.json();
		console.log(data.accessToken);
		console.log(data.user);
		setToken(data.accessToken);
		setUser(data.user);
		localStorage.setItem("token", data.accessToken);
		localStorage.setItem("user", JSON.stringify(data.user));
		if (typeof data.accessToken == "undefined") {
			alert("Invalid Credentials");
		} else if (typeof data.accessToken == "string") {
			router.push("/");
		}
		//store token in local storage
	}
	if (checked) {
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
										onChange={(e) =>
											setEmail(e.target.value)
										}
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
										<Link href="/register">
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
	} else
		return (
			<>
				<Flex w="100vw" h="100vh" align="center" justify={"center"}>
					<Spinner size={"xl"} />
				</Flex>
			</>
		);
}
