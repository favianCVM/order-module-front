import Router from "./utils/Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<Router />
		</ChakraProvider>
	);
}

export default App;
