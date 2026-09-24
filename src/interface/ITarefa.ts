import type IProjeto from "./IProjeto";

export default interface ITarefas{
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}