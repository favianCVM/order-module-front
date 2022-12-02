import React from "react";
import { Box, UnorderedList, Text, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";

const PageLink = ({ children, to }) => (
	<ListItem>
		<Link to={to}>
			<Text fontSize="xl">{children}</Text>
		</Link>
	</ListItem>
);

const Home = () => {
	return (
		<>
			<Header>Modulo de ordenes</Header>

			<Box w="full" display="flex" justifyContent="center">
				<UnorderedList>
					<PageLink to="/order-creation">Crear orden</PageLink>
					<PageLink to="/view-orders">Lista de ordenes de compra</PageLink>
					<PageLink to="/order-approve">Aprobacion de orden de compra</PageLink>
				</UnorderedList>
			</Box>
		</>
	);
};

export default Home;
