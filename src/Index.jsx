// Css
import * as S from "./index.style.js"

// Hooks
import { useState } from "react";

// Components
import Tarefa from "./components/Tarefa.jsx"
import TarefaForm from "./components/TarefaForm.jsx"
import Search from "./components/Search.jsx";
import Filter from "./components/FIlter.jsx";

function Index() {

  // ESTADOS
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: true,
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
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // ADICIONAR TAREFA
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

  // REMOVER TAREFA
  const removeTarefa = (id) => {
    const novasTarefas = [...tarefas]
    
    let tarefasFiltradas = novasTarefas.filter(
      tarefa => tarefa.id !== id ? tarefa : null
    );
    setTarefas(tarefasFiltradas);
  };

  // COMPLETAR TAREFA
  const completarTarefa = (id) => {
    const novasTarefas = [...tarefas]
    novasTarefas.map(tarefa => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa);
    setTarefas(novasTarefas);
  }

  return (
    <>
      <S.App>
        <h1>Lista de tarefas</h1>
        {/* BARRA DE PESQUISA */}
        <Search search={search} setSearch={setSearch} />

        {/* FILTRAR PESQUISA */}
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

        {/* EXIBINDO AS TAREFAS */}
        <S.tarefasContent>
          {tarefas
          // (FILTROS DE PESQUISA)
          .filter((tarefa) =>
            filter === "All" 
            ? true // retorna "true" e não filtra nada
            : filter === "Completas" // se filter for "completas" 
            ? tarefa.isCompleted // retorna as tarefas completas
            : !tarefa.isCompleted // retorna as tarefas não completas
          )
          // (PESQUISA DE TEXTO)
          .filter((tarefa) => 
            tarefa.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          // (ORDEM ALFABÉTICA)
          .sort((a, b) =>
            sort === "Asc" 
            ? a.text.localeCompare(b.text) // organiza de forma ascendente
            : b.text.localeCompare(a.text) // organiza de forma descendente
          )
          // (MOSTRANDO AS TAREFAS)
          .map(({id, text, category, isCompleted}) => (
            <Tarefa 
              key={id} 
              id={id} 
              isCompleted={isCompleted}  
              text={text} 
              category={category} 
              removeTarefa={removeTarefa} 
              completarTarefa={completarTarefa} 
            />
          ))}
        </S.tarefasContent>

        <TarefaForm addTarefa={addTarefa} />
      </S.App>
    </>
  )
}

export default Index
