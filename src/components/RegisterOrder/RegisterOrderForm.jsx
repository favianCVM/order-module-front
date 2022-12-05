import React from "react";
import {
	Box,
	IconButton,
	Flex,
	Center,
	Button,
	Card,
	CardBody,
	Tooltip,
} from "@chakra-ui/react";
import SelectField from "../common/SelectField";
import axios from "axios";
import { AiFillPlusCircle, AiOutlineClose } from "react-icons/ai";
import NumberInput from "../../components/common/NumberInput";
const RegisterOrderForm = ({
	products = [],
	providers = [],
	users = [],
	handleSubmit,
}) => {
	const [form, setForm] = React.useState({
		date: new Date(),
		provider_id: "",
		user_id: "",
		products: [],
	});

	const disableForm = () => {
		if (
			form.products.length === 0 ||
			!form.provider_id ||
			!form.user_id ||
			form.products.find(
				(el) => el?.id === "" || JSON.parse(el?.quantity) === 0
			)
		)
			return true;
		else return false;
	};

	return (
		<Box
			w="40%"
			mx="auto"
			my="4"
			p="6"
			borderColor="black"
			border="2px"
			rounded="lg"
		>
			<form onSubmit={(e) => handleSubmit(e, form)}>
				{/* USUARIO */}
				<SelectField
					value={form.user_id}
					options={
						users.length > 0
							? users.map(({ id, first_name, last_name }) => ({
									value: id,
									label: `${first_name} ${last_name}`,
							  }))
							: []
					}
					label="Usuario"
					placeholder="Seleccione un usuario"
					onChange={(e) => {
						const { value, label } = e.target;

						form.user_id = JSON.parse(value);
						setForm({ ...form });
					}}
				/>

				{/* PROVEEDOR */}
				<SelectField
					value={form.provider_id}
					options={
						providers.length > 0
							? providers.map(({ id, name }) => ({
									value: id,
									label: name,
							  }))
							: []
					}
					label="Proveedor"
					placeholder="Seleccione un proveedor"
					onChange={(e) => {
						const { value, label } = e.target;

						form.provider_id = JSON.parse(value);
						setForm({ ...form });
					}}
				/>

				<Flex flexDir="column" justifyContent="center">
					<Tooltip label="añadir producto">
						<IconButton
							onClick={() => {
								form.products.push({ id: "", quantity: 0 });
								setForm({ ...form });
							}}
							bg="green.300"
							size="lg"
							icon={<AiFillPlusCircle />}
							mx="auto"
							my="8"
							disabled={!form.provider_id || !form.user_id}
						/>
					</Tooltip>

					{/* PRODUCTOS */}
					{form.provider_id && (
						<Box w="full">
							{form.products.map(({ id }, index) => (
								<Card
									key={`box-${index}`}
									bg="gray.100"
									p="8"
									border="2px"
									borderColor="green.600"
									rounded="md"
									my="4"
									boxShadow="lg"
								>
									<CardBody>
										{/* PRODUCTO */}
										<SelectField
											options={
												products.length > 0
													? products
															.filter((product) => {
																if (id !== "" && JSON.parse(id) === product.id)
																	return true;
																else
																	return !form.products.find((formProduct) => {
																		return (
																			formProduct.id &&
																			JSON.parse(formProduct.id) === product.id
																		);
																	});
															})
															.map(({ name, id, quantity }) => ({
																label: `${name} - ${quantity} restantes`,
																value: id,
															}))
													: []
											}
											value={id}
											onChange={(e) => {
												const { value, label } = e.target;
												form.products[index].id = JSON.parse(value);
												setForm({ ...form });
											}}
											placeholder="seleccione un producto"
											label={`producto #${index + 1}`}
										/>
										{/* INPUT DE CANTIDAD */}
										{form.products[index].id && (
											<NumberInput
												label="cantidad"
												min={0}
												max={
													products.length > 0
														? products.find(
																({ id }) =>
																	id === JSON.parse(form.products[index].id)
														  ).quantity
														: []
												}
												onChange={(value) => {
													form.products[index].quantity = JSON.parse(value);
													setForm({ ...form });
												}}
											/>
										)}
										{/* ELIMINAR PRODUCTO */}
										<Center>
											<Tooltip label="eliminar producto">
												<IconButton
													icon={<AiOutlineClose />}
													bg="red.300"
													mx="auto"
													onClick={() => {
														form.products.splice(index, 1);
														setForm({ ...form });
													}}
												/>
											</Tooltip>
										</Center>
									</CardBody>
								</Card>
							))}
						</Box>
					)}
				</Flex>

				<Tooltip label="registrar orden">
					<Button
						variant="solid"
						colorScheme="blue"
						display="block"
						mx="auto"
						type="submit"
						disabled={disableForm()}
					>
						Registrar orden
					</Button>
				</Tooltip>
			</form>
		</Box>
	);
};

export default RegisterOrderForm;
