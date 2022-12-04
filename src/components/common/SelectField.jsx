import React from "react";
import {
	Select,
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/react";

const SelectField = ({
	options = [],
	name,
	label,
	helpertext,
	onChange,
	placeholder,
	isInvalid,
	multiple,
	value = "",
}) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>

			<Select
				isInvalid={isInvalid}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				multiple={multiple}
				value={value}
				bg="white"
			>
				{options.map(({ value, label }, index) => (
					<option key={`${label}-${name}-${index}`} value={value}>
						{label}
					</option>
				))}
			</Select>

			<FormHelperText>{helpertext}</FormHelperText>
		</FormControl>
	);
};

export default SelectField;
