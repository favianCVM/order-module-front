import React from "react";
import { Button, Text, Flex, Badge } from "@chakra-ui/react";

const OrderCard = ({ id, status }) => {
	return (
		<Flex
			rounded="lg"
			alignItems="center"
			justifyContent="space-around"
			borderColor="burlywood"
			borderWidth="medium"
			w="70%"
			padding="2"
		>
			<Text fontSize="2xl" fontWeight="bold">
				#{id}
			</Text>
			<Badge>{status}</Badge>
			<Button>detalles</Button>
		</Flex>
	);
};

export default OrderCard;
