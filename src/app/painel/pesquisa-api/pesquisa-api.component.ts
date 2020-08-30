import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../shared/service/usuario.service";
import {PokemonApiService} from "../../shared/service/pokemon-api.service";
import {Pokemon} from "../../model/Pokemon";
import {PokemonPesquisa} from "../../model/PokemonPesquisa";

@Component({
    selector: 'app-pesquisa-api',
    templateUrl: './pesquisa-api.component.html',
    styleUrls: ['./pesquisa-api.component.css']
})
export class PesquisaApiComponent implements OnInit {

    searchTerm: any;

    listaPokemon: Array<PokemonPesquisa> = [];
    offset = 0;
    limit = 12;

    constructor(private _usuarioService: UsuarioService,
                private _pokemonApiService: PokemonApiService) {
    }

    ngOnInit() {
        this.pesquisarLista(this.offset, this.limit);
    }

    async pesquisarLista(cOffset: number, cLimit: number) {
        let arrayPoke: Array<Pokemon> = [];
        this.listaPokemon = [];
        await this._pokemonApiService.getListaDePokemon(cOffset, cLimit).then(res => {
            arrayPoke = res.results.map(el => {
                return {
                    name: el.name,
                    linkId: el.url
                }
            })
            for (const pokemon of arrayPoke) {
                this._pokemonApiService.getPokemonFromURL(pokemon.linkId).then(res => {
                    // @ts-ignore
                    pokemon.idApi = res.id;
                    // @ts-ignore
                    pokemon.imgUrl = res.sprites.front_default;
                    this._checkIfCaptured(pokemon);
                    this.listaPokemon.push(pokemon);
                });
            }
            this.offset = cOffset;
        })
    }

    private _checkIfCaptured(pokemon: PokemonPesquisa) {
        for (const p of this._usuarioService.getEstado().pokemons) {
            if(p.idApi === pokemon.idApi) {
                pokemon.isCapturado = true;
                return;
            }
        }
    }

    adicionarNaColecao(pokemon: PokemonPesquisa) {
        pokemon.isCapturado = true;
        this._usuarioService.adicionarPokemonColecao(pokemon);
    }
}
