import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./login/login.module";
import {HttpClientModule} from "@angular/common/http";
import {UrlService} from "./shared/service/url-service";
import {IConfig, NgxMaskModule} from "ngx-mask";
import {PainelModule} from "./painel/painel.module";
import {AuthService} from "./auth/auth-service";
import {AuthGuardService} from "./auth/auth-guard-service";

const maskConfig: Partial<IConfig> = {
    validation: true,
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxMaskModule.forRoot(maskConfig),
        LoginModule,
        PainelModule
    ],
    providers: [
        UrlService,
        AuthService,
        AuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
