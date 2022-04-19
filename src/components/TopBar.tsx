import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useAtom } from "jotai";
import { todosAtom, Todo } from "../store";

const BaseURL = "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"

function TopBar() {
  const[,setTodos] = useAtom(todosAtom)

  const onLoad = ()=> {
    fetch(BaseURL)
    .then(resp => resp.json())
    .then((data: Todo[])=> setTodos(data))
  }

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}>Load</Button>
    </Grid>
  );
}

export default TopBar;
