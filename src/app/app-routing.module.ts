import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService} from "./auth/auth-guard-service";

const routes: Routes = [
    {
        path: 'painel',
        loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'usuario-info',
        loadChildren: () => import('./cadatro-usuario/cadastro-usuario.module').then(m => m.CadastroUsuarioModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
