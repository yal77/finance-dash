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
import Link from "next/link";
import { useRef, useState } from "react";
import ProtectedPage from "../components/ProtectedPage";
import { useAuth } from "../hooks";
import Sidebar from "../components/Sidebar";
import Maindash from "../components/Maindash";
import { useEffect } from "react";

export default function Home() {
	const { user, setUser } = useAuth();
	return (
		<ProtectedPage>
			<Flex h="100vh" overflow="hidden" flexDir="row" w="100%">
				{/* Left Side */}
				<Sidebar user={user} />
				{/* Center */}
				<Maindash />
				<Flex></Flex>
			</Flex>
		</ProtectedPage>
	);
}
