import { styled } from "styled-components";

export const form = styled.form `
    display: flex;
    flex-direction: column;
    
`;

export const campo = styled.input `
    width: 100%; /* Largura total do campo */
    padding: 10px; /* Espaçamento interno */
    margin-bottom: 15px; /* Espaçamento inferior entre os campos */
    border: 1px solid #ccc; /* Borda do campo */
    border-radius: 10px; /* Arredondamento da borda */
    box-sizing: border-box; /* Faz com que o padding não aumente o tamanho total do campo */
`;

export const select = styled.select `
  width: 100%; /* Largura total do seletor */
  padding: 10px; /* Espaçamento interno */
  margin-bottom: 15px; /* Espaçamento inferior */
  border: 1px solid #ccc; /* Borda do seletor */
  border-radius: 10px; /* Arredondamento da borda */
  box-sizing: border-box; /* Faz com que o padding não aumente o tamanho total do seletor */
  appearance: none; /* Remove o estilo padrão do navegador */
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'); /* Adiciona uma seta para baixo ao lado do seletor */
  background-repeat: no-repeat; /* Não repete a imagem de fundo */
  background-position: right 10px center; /* Posição da imagem de fundo */
  background-size: 20px; /* Tamanho da imagem de fundo */
  cursor: pointer; /* Cursor de mão ao passar por cima */
`;

export const botao = styled.button `
    padding: 8px 12px;
    background-color: ${({color}) => color};
    border: none;
    height: 40px;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #1a1ac2;
    }

`;