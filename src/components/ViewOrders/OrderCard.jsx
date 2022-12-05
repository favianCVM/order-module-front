import React from "react";
import { Button, Text, Flex, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const OrderCard = ({
	id,
	status,
	user = { name: "" },
	provider = { name: "" },
	isAdmin = false,
}) => {
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
			<Text color="green.900" fontWeight="bold">
				{provider.name}
			</Text>
			<Text>
				{user.first_name} {user.last_name}
			</Text>
			<Badge>{status}</Badge>
			<Button>
				<Link to={`/order-details/${id}`}>detalles</Link>
			</Button>
			{isAdmin && <Button>Aprovar</Button>}
		</Flex>
	);
};

export default OrderCard;
