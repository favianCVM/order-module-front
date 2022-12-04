import React from "react";
import {
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";

const TextField = ({
	label,
	helpertext,
	name,
	placeholder,
	onChange,
	type = "text",
	isInvalid,
	max,
}) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<Input
				isInvalid={isInvalid}
				name={name}
				onChange={onChange}
				type={type}
				placeholder={placeholder}
			/>
			<FormHelperText>{helpertext}</FormHelperText>
		</FormControl>
	);
};

export default TextField;
