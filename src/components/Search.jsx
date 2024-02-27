import React from 'react'
import * as S from "./search.style" 

const Search = ({search, setSearch}) => {
  return (
    <S.searchContent>
        <h2>Pesquisar</h2>
        <S.searchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite para pesquisar' />
    </S.searchContent>
  )
}

export default Search
