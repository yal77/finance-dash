import React from "react";
import { useRef } from "react";
import Router from "next/router";
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

export default function Register() {
	const passwordRef = useRef();
	const emailRef = useRef();
	const nameRef = useRef();

	async function handleSubmit(e) {
		e.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const name = nameRef.current.value;
		const firstName = name.split(" ")[0];
		const lastName = name.split(" ")[1];
		const msgBody = {
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};
		const msgString = JSON.stringify(msgBody);
		console.log(msgString);
		console.log(msgBody);
		const res = await fetch("http://localhost:5000/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: msgString,
		});
		const data = await res.json();
		Router.push("/");
	}
	return (
		<Flex
			align="center"
			justify="center"
			width="100vw"
			height="100vh"
			direction="column"
		>
			<Flex
				width="50%"
				minW="350px"
				direction="column"
				justify="center"
				border="1px"
				align="center"
				padding="3.5rem"
				borderRadius="0.5rem"
				shadow="md"
			>
				<Heading marginBottom="1.5rem">Registration Form</Heading>
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
						<FormLabel htmlFor="name" alignSelf="flex-start">
							Name
						</FormLabel>
						<Input type="text" isRequired ref={nameRef} />
						<FormLabel htmlFor="email" alignSelf="flex-start">
							Email
						</FormLabel>
						<Input
							id="email"
							type="email"
							isRequired
							ref={emailRef}
						/>
						<FormLabel htmlFor="password" alignSelf="flex-start">
							Password
						</FormLabel>
						<Input type="password" ref={passwordRef} isRequired />
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
								Register
							</Button>
							<Link href="/">
								<Button
									colorScheme="teal"
									marginTop="1.5rem"
									maxW="fit-content"
									padding="0.5rem 1rem"
									variant="outline"
								>
									Login
								</Button>
							</Link>
						</Wrap>
					</FormControl>
				</form>
			</Flex>
		</Flex>
	);
}
