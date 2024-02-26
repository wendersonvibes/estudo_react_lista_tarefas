import { useState } from 'react';
// CSS
import * as S from "./tarefaForm.style";

const TarefaForm = ({addTarefa}) => {
  const [titulo, setTitulo] = useState("");
  const [category, setCategory] = useState("");

  const handleTitulo = (e) => {
    setTitulo(e.target.value)
  };

  const handleCategory = (e) => {
    setCategory(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Para não enviar o formulário
    if (!titulo || !category) return;
    addTarefa(titulo, category);
    setTitulo("");
    setCategory("");
  };

  return (
    <>
        <h2>Criar tarefa</h2>

        <S.form onSubmit={handleSubmit}>
            <S.campo value={titulo} type="text" placeholder="Digite o título" onChange={handleTitulo} />

            <S.select value={category} onChange={handleCategory}>
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Estudos">Estudos</option>
              <option value="Pessoal">Pessoal</option>
            </S.select>

            <S.botao color='#6A5ACD' type="submit">Criar tarefa</S.botao>
        </S.form>
    </>
  )
}

export default TarefaForm