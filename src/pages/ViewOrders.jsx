import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import OrderCard from "../components/ViewOrders/OrderCard";
import Header from "../components/common/Header";

const ViewOrders = () => {
	return (
		<Box w="full" height="full">
			<Header>Lista de ordenes de compra</Header>
			<Flex margin="10" alignItems="center" flexDir="column" rowGap="4">
				<OrderCard id="1" status="status" />
				<OrderCard id="1" status="status" />
				<OrderCard id="1" status="status" />
			</Flex>
		</Box>
	);
};

export default ViewOrders;
