import React from "react";
import { Box, Heading, UnorderedList, Text, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
			<Heading
				w="fit-content"
				padding="4"
				mx="auto"
				my="10"
				rounded="md"
				textAlign="center"
				bg="gray.200"
			>
				Modulo de ordenes
			</Heading>

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
