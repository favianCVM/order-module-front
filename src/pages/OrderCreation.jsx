import React from "react";
import OrderCreationForm from "../components/RegisterOrder/RegisterOrderForm";
import  Header from "../components/common/Header"

const OrderCreation = () => {
	return (
		<>
			<Header>
				Crear orden de compra
			</Header>
			<OrderCreationForm />
		</>
	);
};

export default OrderCreation;
