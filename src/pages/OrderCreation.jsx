import React from "react";
import OrderCreationForm from "../components/RegisterOrder/RegisterOrderForm";
import Header from "../components/common/Header";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const OrderCreation = () => {
	const toast = useToast();
	const navigate = useNavigate();

	const [products, setProducts] = React.useState([]);
	const [providers, setProviders] = React.useState([]);
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		const host = "http://localhost:8000";
		axios
			.all([
				axios.get(`${host}/get-products/`),
				axios.get(`${host}/get-providers/`),
				axios.get(`${host}/get-users/`),
			])
			.then(
				axios.spread((...responses) => {
					// console.log(responses);
					setProducts(responses[0].data);
					setProviders(responses[1].data);
					setUsers(responses[2].data);
				})
			)
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const handleSubmit = (e, form) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/create-order", form)
			.then((response) => {
				console.log("response :", response);
				toast({
					title: "Orden creada exitosamente.",
					description: "Sera redirido al homepage.",
					status: "success",
					duration: 2000,
					isClosable: true,
				});

				setProducts([]);
				setProviders([]);
				setUsers([]);

				setTimeout(() => {
					navigate("/");
				}, 2000);
			})
			.then((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Header>Crear orden de compra</Header>
			<OrderCreationForm
				handleSubmit={handleSubmit}
				products={products}
				providers={providers}
				users={users}
			/>
		</>
	);
};

export default OrderCreation;
