import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class UrlService {

    API_URL = environment.url;

    getUrlvalidacaoUsuario(): string {
        return this.API_URL + '/usuario/validar';
    }

    getUrlCadastrarUsuario(): string {
        return this.API_URL + '/usuario/cadastrar';
    }

    getUrlAtualizarDadosUsuario(): string {
        return this.API_URL + '/usuario/atualizar';
    }

    getUrlColecaoUsuario(): string {
        return this.API_URL + '/usuario/colecao/';
    }

    getUrlCaptura(): string {
        return this.API_URL + '/usuario/capturar/pokemon';
    }

    getUrlLoginUsuario() {
        return this.API_URL + '/login';
    }

    getUrlApiPokemon(): string {
        return 'https://pokeapi.co/api/v2/pokemon';
    }

    getUrlVerificarPokemon(): string {
        return this.API_URL + '/pokemon/by/idApi/';
    }

    getUrlCadastrarPokemon(): string {
        return this.API_URL + '/pokemon/cadastrar';
    }

    getUrlBusca() {
        return this.API_URL + '/usuario/pesquisar/pokemon';
    }

    getDescricaoPokemon() {
        return 'https://pokeapi.co/api/v2/pokemon/';
    }
}