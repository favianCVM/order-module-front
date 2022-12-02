import React from "react";
import { Heading, IconButton, Box } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";

const Header = ({ children }) => {
	const location = useLocation();
	return (
		<Heading
			w="fit-content"
			padding="4"
			mx="auto"
			my="10"
			rounded="md"
			textAlign="center"
			bg="gray.200"
		>
			{location.pathname !== "/" && (
				<Link to="/">
					<IconButton colorScheme="blue" aria-label="home" icon={<AiTwotoneHome />} />
				</Link>
			)}
			<Box display="inline" ml={location.pathname !== "/" ? "4" : "0"}>{children}</Box>
		</Heading>
	);
};

export default Header;
