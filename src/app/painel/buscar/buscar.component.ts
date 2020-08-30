import {Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Pokemon} from "../../model/Pokemon";
import {BuscarService} from "../../shared/service/buscar-service";

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, DoCheck {

    @Input()
    termoPesquisa = {
        value: ''
    };

    pokemons: Array<Pokemon> = [];

    pesquisaDiffer: KeyValueDiffer<any, any>;

    constructor(private  _buscaService: BuscarService,
                private _keyValueDiffers: KeyValueDiffers) {
    }

    ngOnInit() {
        this.pesquisaDiffer = this._keyValueDiffers.find(this.termoPesquisa).create();
    }

    ngDoCheck(): void {
        let diff = this.pesquisaDiffer.diff(this.termoPesquisa);
        if (diff) {
            console.log(this.termoPesquisa.value);
            this.pesquisar();
        }
    }

    pesquisar() {
        if (this.termoPesquisa.value) {
            this._buscaService.buscar(this.termoPesquisa.value).subscribe(res => this.pokemons = res);
        }
    }
}
