import { styled } from "styled-components";

export const tarefa = styled.div ``; 

export const tarefaContent = styled.div `
    text-decoration: ${(props) => props.decoration};
`;

export const botao = styled.button `
    width: 90px;
    height: 30px;
    padding: 8px 12px;
    background-color: ${(props) => props.color};
    border: none;
    margin: 10px 12px 15px 0;

    border-radius: 10px;
    color: white;
    cursor: pointer;
`;

export const botaoComplete = styled.button `
    width: 90px;
    height: 30px;
    padding: 8px 12px;
    background-color: green;
    border: none;
    margin: 10px 12px 15px 0;

    border-radius: 10px;
    color: white;
`;

export const botaoDelete = styled.button `
    width: 90px;
    height: 30px;
    padding: 8px 12px;
    background-color: red;
    border: none;
    margin: 10px 12px 15px 0;

    border-radius: 10px;
    color: white;
`;

