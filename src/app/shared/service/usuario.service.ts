import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "./url-service";
import {Usuario} from "../../model/Usuario";
import {Pokemon} from "../../model/Pokemon";
import {PokemonService} from "./pokemon-service";

@Injectable({
    providedIn: "root"
})
export class UsuarioService {

    private _usuarioState: Usuario = {
        nome: '',
        email: '',
        cpf: '',
        telefone: ''
    }

    constructor(private _http: HttpClient,
                private _urlService: UrlService,
                private _pokemonService: PokemonService) {
    }

    async cadastrarUsuario(usuario: Usuario): Promise<any> {
        return await this._http.post(this._urlService.getUrlCadastrarUsuario(), {
            nome: usuario.nome,
            email: usuario.email,
            cpf: usuario.cpf,
            telefone: usuario.telefone
        }).toPromise();
    }

    async atualizarUsuario(usuario: Usuario): Promise<any> {
        return await this._http.put(this._urlService.getUrlAtualizarDadosUsuario(), {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            pokemons: usuario.pokemons
        }).toPromise();
    }

    async login(usuario: Usuario): Promise<any> {
        return await this._http.post(this._urlService.getUrlLoginUsuario(), {
            email: usuario.email,
            cpf: usuario.cpf
        }).toPromise()
    }

    adicionarPokemonColecao(pokemon: Pokemon) {
        this._pokemonService.verificarPokemonNaBase(pokemon).subscribe(
            res => this.savePokemon(res),
            err => this._pokemonService.cadastrarNaBase(pokemon).then(res => this.savePokemon(res)));
    }

    async getColecaoPokemonUsuario(idUsuario: number): Promise<any> {
        return await this._http.get(`${this._urlService.getUrlColecaoUsuario()}${idUsuario}`)
            .toPromise();
    }

    private savePokemon(pokemon: Pokemon) {
        const state = this.getEstado();
        this._http.put(this._urlService.getUrlCaptura(), {
            idPokemon: pokemon.id,
            idUsuario: this.getEstado().id
        }).subscribe((res: Usuario) => {
            state.pokemons = res.pokemons;
            this.getEstado().pokemons = state.pokemons;
        });
    }

    armazenarUsuarioSessao() {
        sessionStorage.setItem('usuario', JSON.stringify(this._usuarioState));
    }

    getEstado() {
        this._usuarioState = JSON.parse(sessionStorage.getItem('usuario'));
        return this._usuarioState;
    }

    setEstado(usuario: Usuario) {
        this.armazenarUsuarioSessao();
        this._usuarioState = usuario;
    }
}