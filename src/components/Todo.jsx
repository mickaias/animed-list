import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Box, Text, TodoList, Grid, Button, BtnRemove, Category } from '../style/index.style'
import PropsTypes from 'prop-types'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <TodoList style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      <Box >
        <Text>{todo.text}</Text>
        <Category>({todo.category})</Category>
      </Box>
      <Grid>
        <Button onClick={() =>  completeTodo(todo.id)}><AiOutlineCheck /></Button>
        <BtnRemove onClick={() =>  removeTodo(todo.id)}><AiOutlineClose /></BtnRemove>
      </Grid>
    </TodoList>
  )
}

Todo.propTypes = {
  todo: PropsTypes.any.isRequired,
  removeTodo: PropsTypes.any.isRequired,
  completeTodo: PropsTypes.any.isRequired,
};


export default Todo