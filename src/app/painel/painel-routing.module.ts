import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PainelComponent} from "./painel.component";
import {MinhaColecaoComponent} from "./minha-colecao/minha-colecao.component";
import {BuscarComponent} from "./buscar/buscar.component";
import {PesquisaApiComponent} from "./pesquisa-api/pesquisa-api.component";
import {DescricaoComponent} from "./descricao/descricao.component";

const routes: Routes = [
    {
        path: '', component: PainelComponent, children: [
            {
                path: '', redirectTo: 'minha-colecao', pathMatch: 'full'
            },
            {
                path: 'minha-colecao', component: MinhaColecaoComponent
            },
            {
                path: 'buscar', component: BuscarComponent
            },
            {
                path: 'pesquisa-api', component: PesquisaApiComponent
            },
            {
                path: 'descricao/:id', component: DescricaoComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PainelRoutingModule {

}