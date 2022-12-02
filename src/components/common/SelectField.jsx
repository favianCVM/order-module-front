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
			>
				{options.map(({ value, label }) => (
					<option value={value}>{label}</option>
				))}
			</Select>

			<FormHelperText>{helpertext}</FormHelperText>
		</FormControl>
	);
};

export default SelectField;
