import { styled } from "styled-components";

export const searchContent = styled.div `
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    margin-bottom: 20px;
`;

export const searchInput = styled.input `
    margin-top: 15px;
    width: 100%; /* Largura total do campo */
    padding: 10px; /* Espaçamento interno */
    border: 1px solid #ccc; /* Borda do campo */
    border-radius: 10px; /* Arredondamento da borda */
    box-sizing: border-box; /* Faz com que o padding não aumente o tamanho total do campo */
`;