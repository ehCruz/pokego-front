import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../shared/service/usuario.service";
import {Pokemon} from "../../model/Pokemon";

@Component({
  selector: 'app-minha-colecao',
  templateUrl: './minha-colecao.component.html',
  styleUrls: ['./minha-colecao.component.css']
})
export class MinhaColecaoComponent implements OnInit {

  pokemons: Array<Pokemon> = [];
  termoPesquisa: string = "";

  constructor(private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
    const usuario = this._usuarioService.getEstado();
    this._usuarioService.getColecaoPokemonUsuario(usuario.id).then(el => {
      this.pokemons = el.pokemons;
      usuario.pokemons = this.pokemons;
      this._usuarioService.setEstado(usuario);
    });
  }

}
