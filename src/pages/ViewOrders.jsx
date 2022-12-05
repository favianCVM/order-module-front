import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import OrderCard from "../components/ViewOrders/OrderCard";
import Header from "../components/common/Header";
import axios from "axios";

const ViewOrders = () => {
	const [orders, setOrders] = React.useState([]);

	React.useEffect(() => {
		axios
			.get("http://localhost:8000/get-orders/")
			.then((response) => {
				setOrders(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Box w="full" height="full">
			<Header>Lista de ordenes de compra</Header>
			<Flex margin="10" alignItems="center" flexDir="column" rowGap="4">
				{orders.map(({ user, id, status, provider }, index) => (
					<OrderCard
						id={id}
						key={`orders-${status}-${index}`}
						user={user}
						status={status}
						provider={provider}
					/>
				))}
			</Flex>
		</Box>
	);
};

export default ViewOrders;
