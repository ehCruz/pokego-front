import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "./url-service";
import {Pokemon} from "../../model/Pokemon";
import {UsuarioService} from "./usuario.service";
import {Usuario} from "../../model/Usuario";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PokemonService {

    constructor(private _http: HttpClient,
                private _urlService: UrlService) {
    }

    verificarPokemonNaBase(pokemon: Pokemon): Observable<any> {
        return this._http.get(`${this._urlService.getUrlVerificarPokemon()}${pokemon.idApi}`);
    }

    async cadastrarNaBase(pokemon: Pokemon) {
        return await this._http.post(this._urlService.getUrlCadastrarPokemon(), {
            idApi: pokemon.idApi,
            name: pokemon.name,
            imgUrl: pokemon.imgUrl
        }).toPromise();
    }

    pesquisarPokemonDescricao(id: number): Observable<any> {
        return this._http.get(this._urlService.getDescricaoPokemon() + id);
    }
}