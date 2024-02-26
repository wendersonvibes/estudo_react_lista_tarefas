// Css
import * as S from "./index.style.js"

// Hooks
import { useState } from "react";

// Components
import Tarefa from "./components/Tarefa.jsx"
import TarefaForm from "./components/TarefaForm.jsx"
import { tarefa } from "./components/tarefa.style.js";

function Index() {

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])

  const addTarefa = (titulo, category) => {
    const novasTarefas = [
      ...tarefas, 
      {
        id: Math.floor(Math.random() * 10000),
        text: titulo,
        category: category,
        isCompleted: false
      },
    ];

    setTarefas(novasTarefas)
  };

  const removeTarefa = (id) => {
    const novasTarefas = [...tarefas]

    const tarefasFiltradas = novasTarefas.filter(
      tarefa => tarefa.id !== id ? tarefa : null
    );

    setTarefas(tarefasFiltradas);
  };

  const completarTarefa = (id) => {
    const novasTarefas = [...tarefas]
    novasTarefas.map(tarefa => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa);
    setTarefas(novasTarefas);
  }

  return (
    <>
      <S.App>
        <h1>Lista de tarefas</h1>
        <div>
          {tarefas.map(({ id, text, category, isCompleted }) => (
            <Tarefa key={id} id={id} isCompleted={isCompleted} text={text} category={category} removeTarefa={removeTarefa} completarTarefa={completarTarefa} />
          ))}
        </div>

        <TarefaForm addTarefa={addTarefa} />
      </S.App>
    </>
  )
}

export default Index
