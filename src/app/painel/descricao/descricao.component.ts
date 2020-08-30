import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../shared/service/pokemon-service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {

  idApi: number;

  description: any = {};

  constructor(private _route: ActivatedRoute,
              private _pokemonService: PokemonService,
              private _location: Location) { }

  ngOnInit() {
    this._route.params.subscribe(el => {
      this.idApi = +el['id'];
      this._pokemonService.pesquisarPokemonDescricao(this.idApi).subscribe(res => {
        this.description.imgUrl = res.sprites.front_default;
        this.description.name = res.name;
        this.description.abilities = res.abilities.map(el => {
          return {
            name: el.ability.name
          }
        });
        this.description.moves = res.moves.map(el => {
          return {
            name: el.move.name
          }
        });
        this.description.url = 'https://pokeapi.co/api/v2/pokemon/' + this.idApi;
      })
    })
  }

  voltar() {
    this._location.back();
  }
}
