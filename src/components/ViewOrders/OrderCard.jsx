import React from "react";
import {
	Button,
	Text,
	Flex,
	Badge,
	useBoolean,
	useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderCard = ({
	id,
	status,
	user = { name: "" },
	provider = { name: "" },
	isAdmin = false,
}) => {
	const navigate = useNavigate();
	const [fetching, setFetching] = useBoolean();
	const toast = useToast();

	const colorSchemes = {
		CANCELED: "red",
		OPEN: "blue",
		APPROVED: "green",
	};
	return (
		<Flex
			rounded="lg"
			alignItems="center"
			justifyContent="space-evenly"
			borderColor="burlywood"
			borderWidth="medium"
			w="70%"
			padding="2"
		>
			<Text fontSize="2xl" fontWeight="bold">
				#{id}
			</Text>
			<Text color="green.900" fontWeight="bold">
				{provider?.name}
			</Text>
			<Text>
				{user?.first_name} {user?.last_name}
			</Text>
			<Badge colorScheme={colorSchemes[status]}>{status}</Badge>
			<Button
				onClick={() =>
					navigate({
						pathname: `/order-details/${id}`,
					})
				}
			>
				detalles
			</Button>
			{isAdmin && (
				<Flex>
					<Button
						colorScheme="green"
						disabled={fetching}
						isLoading={fetching}
						mr="6"
						onClick={() => {
							setFetching.on();
							axios
								.put("http://localhost:8000/approve-order", { id })
								.then((response) => {
									console.log(response);
									setFetching.off();
									toast({
										title: "Orden aprovada exitosamente.",
										description: "Sera redirido al homepage.",
										status: "info",
										duration: 2000,
										isClosable: true,
									});
									setTimeout(() => {
										navigate("/");
									}, 3000);
								})
								.catch((error) => {
									console.log("error :", error);
									setFetching.off();
								});
						}}
					>
						Aprovar
					</Button>

					<Button
						colorScheme="red"
						disabled={fetching}
						isLoading={fetching}
						onClick={() => {
							setFetching.on();
							axios
								.put("http://localhost:8000/cancel-order", { id })
								.then((response) => {
									console.log(response);
									setFetching.off();
									toast({
										title: "Orden cancelada exitosamente.",
										description: "Sera redirido al homepage.",
										status: "info",
										duration: 2000,
										isClosable: true,
									});
									setTimeout(() => {
										navigate("/");
									}, 3000);
								})
								.catch((error) => {
									console.log("error :", error);
									setFetching.off();
								});
						}}
					>
						Cancelar
					</Button>
				</Flex>
			)}
		</Flex>
	);
};

export default OrderCard;
