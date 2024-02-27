import React from 'react'
import * as S from "./filter.style"

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <S.filterContent>
        <h2>Filtrar</h2>
        <S.filterOptions>
            <div>
                <p>Status:</p>
                <S.select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completas">Completas</option>
                    <option value="Incompletas">Incompletas</option>
                </S.select>
            </div>

            <div>
                <p>Ordem alfabética:</p>
                <S.botao color='#6e78ff' onClick={() => setSort("Asc")}>Asc</S.botao>
                <S.botao color='#6e78ff' onClick={() => setSort("Desc")}>Desc</S.botao>
            </div>
        </S.filterOptions>   
    </S.filterContent>
  )
}

export default Filter