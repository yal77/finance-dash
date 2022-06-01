import React from "react";
import { Tr, Td, Flex, Text, Avatar } from "@chakra-ui/react";

export default function TransactionRow({
	name,
	category,
	cashback,
	amount,
	src,
	date,
	avatarColor,
}) {
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
		</Tr>
	);
}
