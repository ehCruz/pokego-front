import {Pokemon} from "./Pokemon";

export interface Usuario {
    id?: number,
    nome?: string,
    email?: string,
    cpf?: string,
    telefone?: string,
    dataCadastro?: string
    pokemons?: Array<Pokemon>
}