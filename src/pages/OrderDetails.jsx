import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/common/Header";
import { Box, Heading, Flex, Badge, Card, Text } from "@chakra-ui/react";

const OrderDetails = () => {
	const [order, setOrder] = React.useState({});
	const [orderProducts, setOrderProducts] = React.useState([]);

	const params = useParams();

	React.useEffect(() => {
		axios
			.all([
				axios.get(`http://127.0.0.1:8000/order-products/?order=${params.id}`),
				axios.get(`http://127.0.0.1:8000/order-details/?id=${params.id}`),
			])
			.then(
				axios.spread((...responses) => {
					setOrderProducts(responses[0].data);
					setOrder(responses[1].data[0]);
				})
			)
			.catch((error) => console.log(error));
	}, []);

	return (
		<Box>
			<Header>Orden #{params.id}</Header>
			<Flex justifyContent="space-around" w="75%" mx="auto">
				<Card>
					estatus:
					<Badge colorScheme="orange" fontSize="lg">
						{order?.status}
					</Badge>
				</Card>
				<Card>
					usuario:
					<Badge colorScheme="green" fontSize="lg">
						{order?.user?.first_name} {order?.user?.last_name}
					</Badge>
				</Card>
				<Card>
					proveedor:
					<Badge colorScheme="purple" fontSize="lg">
						{order?.provider?.name}
					</Badge>
				</Card>
			</Flex>
			<Heading mt="10" textAlign="center">
				Productos
			</Heading>
			<Flex w="75%" mx="auto" flexDir="column">
				{orderProducts?.map(({ quantity, product }) => (
					<Card my="4" mx="auto" w="fit-content" flexDir="row" justifyContent="space-around">
						<Card display="inline" w="fit-content">
							<Text>nombre</Text>
							<Badge>{product?.name}</Badge>
						</Card>
						<Card display="inline" w="fit-content">
							<Text>categoria</Text>
							<Badge>{product?.product_category?.name}</Badge>
						</Card>
						<Card display="inline" w="fit-content">
							<Text>cantidad</Text>
							<Badge>{quantity}</Badge>
						</Card>
					</Card>
				))}
			</Flex>
		</Box>
	);
};

export default OrderDetails;
