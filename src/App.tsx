import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { Provider as JotaiProvider } from "jotai";

export function App() {
	return (
		<ChakraProvider theme={theme}>
			<Box maxWidth="8xl" margin="auto" p={5}>
				<JotaiProvider>
					<TopBar />
					<TodoList />
					<TodoAdd />
				</JotaiProvider>
			</Box>
		</ChakraProvider>
	);
}
