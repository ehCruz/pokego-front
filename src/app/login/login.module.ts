import {NgModule} from '@angular/core';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login.routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgxMaskModule} from "ngx-mask";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule,
        SharedModule,
        NgxMaskModule.forChild()
    ]
})
export class LoginModule {
}
