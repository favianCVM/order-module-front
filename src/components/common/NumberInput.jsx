import React from "react";
import {
	NumberInput as ChakraNumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
	FormControl,
	FormLabel,
	FormHelperText,
} from "@chakra-ui/react";

const NumberInput = ({ max, onChange, name, helpertext, label }) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<ChakraNumberInput
				name={name}
				onChange={onChange}
				defaultValue={0}
				max={max}
				>
				
				<NumberInputField bg="white" />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</ChakraNumberInput>
			<FormHelperText>{helpertext}</FormHelperText>
		</FormControl>
	);
};

export default NumberInput;
