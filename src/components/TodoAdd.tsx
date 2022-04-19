import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { addTodoAtom, newTodoAtom } from "../store";
function TodoAdd() {
	const [newTodo, newTodoSet] = useAtom(newTodoAtom);
  const [,addToDo] = useAtom(addTodoAtom)

	return (
		<Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
			<Input
				placeholder="New todo"
				value={newTodo}
				onChange={(evt) => newTodoSet(evt.target.value)}
			/>
			<Button onClick={()=>addToDo()}>Add Todo</Button>
		</Grid>
	);
}

export default TodoAdd;
