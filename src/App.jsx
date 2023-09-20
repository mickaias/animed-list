import { useState } from 'react'
import { Title, Apps, WraperDiv, } from './style/index.style'
import { GlobalStyle } from './style/Created.style';
import Todo from './components/Todo';
import { TodoForm } from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Fazer o pull',
      category: 'Trabalho',
      isCompleted: true
    },
    {
      id: 2,
      text: 'melhorar styled-components',
      category: 'Estudos',
      isCompleted: false
    },
    {
      id: 3,
      text: 'Gastar menos',
      category: 'Pessoal',
      isCompleted: true
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [...todos,
    {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ];

    setTodos(newTodos);
  }

  return (
    <>
      <GlobalStyle />
      <Apps>
        <TodoForm addTodo={addTodo} />
        <Title>Todo-list</Title>
        <WraperDiv>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </WraperDiv>
      </Apps>
    </>
  )
}

export default App