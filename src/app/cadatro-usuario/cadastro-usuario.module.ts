import {NgModule} from '@angular/core';
import {CadatroUsuarioComponent} from "./cadatro-usuario.component";
import {CadastroUsuarioRoutingModule} from "./cadastro-usuario.routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
    declarations: [
        CadatroUsuarioComponent
    ],
    imports: [
        CadastroUsuarioRoutingModule,
        SharedModule,
        NgxMaskModule.forChild()
    ]
})
export class CadastroUsuarioModule {
}
