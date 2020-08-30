import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info/user-info.component';
import {PainelComponent} from './painel.component';
import {PainelRoutingModule} from "./painel-routing.module";
import { MinhaColecaoComponent } from './minha-colecao/minha-colecao.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PesquisaApiComponent } from './pesquisa-api/pesquisa-api.component';
import {SharedModule} from "../shared/shared.module";
import { DescricaoComponent } from './descricao/descricao.component';

@NgModule({
    declarations: [UserInfoComponent, PainelComponent, MinhaColecaoComponent, BuscarComponent, PesquisaApiComponent, DescricaoComponent],
    imports: [
        CommonModule,
        PainelRoutingModule,
        SharedModule
    ]
})
export class PainelModule {
}
