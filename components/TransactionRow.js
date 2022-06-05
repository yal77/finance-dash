import React from "react";
import {
	Tr,
	Td,
	Flex,
	Text,
	Avatar,
	Link,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
export default function TransactionRow({
	name,
	category,
	cashback,
	amount,
	src,
	date,
	avatarColor,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Tr>
			<Td>
				<Flex flexDir="row" gap="10px" align="center">
					<Avatar
						name={name}
						src={src}
						bg={avatarColor == null ? "#fff" : avatarColor}
					/>
					<Flex flexDir="column">
						<Text fontWeight="bold">{name}</Text>
						<Text fontSize="xs">{date}</Text>
					</Flex>
				</Flex>
			</Td>
			<Td>{category}</Td>
			<Td isNumeric>{cashback}</Td>
			<Td>
				<Text display="inline-flex" fontWeight="bold">
					{amount}
				</Text>
				.00
			</Td>
			<Td>
				<Link onClick={onOpen}>View</Link>
			</Td>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent p="1rem">
					<ModalHeader display="flex" alignItems="center">
						<Avatar
							name={name}
							src={src}
							bg={avatarColor == null ? "#fff" : avatarColor}
							mr="1rem"
						/>
						{amount} at {name}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							<Flex
								display="inline-flex"
								fontWeight="bold"
								mr="1rem"
							>
								Total Cashback:{"  "}
							</Flex>
							{cashback}
						</Text>
						<Text>
							<Flex
								display="inline-flex"
								fontWeight="bold"
								mr="1rem"
							>
								Category
							</Flex>
							{category}
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Tr>
	);
}
