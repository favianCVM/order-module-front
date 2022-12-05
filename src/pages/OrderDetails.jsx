import React from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
	const [order, setOrder] = React.useState();
	const params = useParams();

	React.useEffect(() => {
		axios
			.get(`http://localhost:8000/order-details/${params.id}`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	}, []);
  
	console.log(params);
	return <Box>OrderDetails</Box>;
};

export default OrderDetails;
