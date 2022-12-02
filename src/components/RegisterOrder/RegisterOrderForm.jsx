import React from "react";
import { Box } from "@chakra-ui/react";
import TextField from "../common/TextField";
import SelectField from "../common/SelectField";
import axios from "axios";
import * as yup from "yup";
	
const RegisterOrderForm = () => {
	const handleSubmit = () => {};
	const handleChange = () => {};

	return (
		<Box w="40%" mx="auto" my="4" p="6" bg="gray.200" rounded="lg">
			<form onSubmit={handleSubmit}>
				<TextField placeholder="nombre" label="nombre" />
				<SelectField label="option" placeholder="test" />
			</form>
		</Box>
	);
};

export default RegisterOrderForm;
