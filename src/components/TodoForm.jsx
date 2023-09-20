import { Button, Input, Form, TodoForms, Subtitle } from "../style/index.style"
import { useState } from "react"
import PropsTypes from 'prop-types'

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;
    addTodo(value, category);

    setValue("")
    setCategory("")
  }


  return (
    <TodoForms>
      <Subtitle>Criar tarefa:</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o titulo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <Button type="submit">Criar tarefa</Button>
      </Form>
    </TodoForms>
  )
}

TodoForm.propTypes = {
  addTodo: PropsTypes.any.isRequired,
};
