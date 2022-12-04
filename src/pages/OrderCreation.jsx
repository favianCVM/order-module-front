import React from "react";
import OrderCreationForm from "../components/RegisterOrder/RegisterOrderForm";
import Header from "../components/common/Header";
import axios from "axios";

const OrderCreation = () => {
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

		// TODO: manejar el form de los productos como => "NOMBRE DE PRODUCTO - PROVEEDOR"
		// con un boton que agrege en una matriz los objetos
	}, []);

	return (
		<>
			<Header>Crear orden de compra</Header>
			<OrderCreationForm
				products={products}
				providers={providers}
				users={users}
			/>
		</>
	);
};

export default OrderCreation;
