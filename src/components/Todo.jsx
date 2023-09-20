import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Box, Text, TodoList, Grid, Button, BtnRemove, Category } from '../style/index.style'
import PropsTypes from 'prop-types'

const Todo = ({ todo }) => {
  return (
    <TodoList>
      <Box >
        <Text>{todo.text}</Text>
        <Category>({todo.category})</Category>
      </Box>
      <Grid>
        <Button><AiOutlineCheck /></Button>
        <BtnRemove><AiOutlineClose /></BtnRemove>
      </Grid>
    </TodoList>
  )
}

Todo.propTypes = {
  todo: PropsTypes.any.isRequired,
};

export default Todo