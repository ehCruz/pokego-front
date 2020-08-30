import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CadatroUsuarioComponent} from "./cadatro-usuario.component";

const routes: Routes = [
    {
        path: 'novo',
        component: CadatroUsuarioComponent
    },
    {
        path: 'editar',
        component: CadatroUsuarioComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroUsuarioRoutingModule {

}