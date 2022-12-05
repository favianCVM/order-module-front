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

const NumberInput = ({ max, min = 0, onChange, name, helpertext, label }) => {
	return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<ChakraNumberInput
				name={name}
				onChange={onChange}
				defaultValue={0}
				max={max}
				min={min}
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
