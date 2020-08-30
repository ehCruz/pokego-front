import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsuarioService} from "./service/usuario.service";
import {PokemonApiService} from "./service/pokemon-api.service";
import {PokemonService} from "./service/pokemon-service";

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        UsuarioService,
        PokemonApiService,
        PokemonService
    ]
})
export class SharedModule {

}