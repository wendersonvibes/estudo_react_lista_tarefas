import React from 'react'

// Css
import * as S from "./tarefa.style"

// Icons
import { BsFillTrash3Fill } from "react-icons/bs";

function Tarefa({ id, text, category, isCompleted, removeTarefa, completarTarefa }) {
  return (
    <S.tarefa>
      <S.tarefaContent decoration={isCompleted ? "line-through" : ""}>
        <p>{text}</p>
        <p>({category})</p>
      </S.tarefaContent>

      <div>
        <S.botao color="green" onClick={() => completarTarefa(id)} > Completar </S.botao>
        <S.botao color="red" onClick={() => removeTarefa(id)}> <BsFillTrash3Fill /> </S.botao>
      </div>
    </S.tarefa>
  )
}

export default Tarefa
