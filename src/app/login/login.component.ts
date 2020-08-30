import {Component, OnInit} from '@angular/core';
import {Usuario} from "../model/Usuario";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../shared/service/usuario.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario = {
        nome: '',
        cpf: ''
    }

    usuarioLogin;
    showErrorModal = false;
    errorMessage = '';

    constructor(private _usuarioService: UsuarioService,
                private _router: Router) {
    }

    ngOnInit() {
        if(this._usuarioService.getEstado()) {
            this._router.navigate(['/painel'])
        }
        this.usuarioLogin = new FormGroup({
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            cpf: new FormControl('', [
                Validators.required
            ])
        })
    }

    get email() {
        return this.usuarioLogin.get('email');
    }

    get cpf() {
        return this.usuarioLogin.get('cpf');
    }

    async logar() {
        this.usuario.cpf = this.usuario.cpf
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        await this._usuarioService.login(this.usuario).then(
            suc => {
                this.usuario = suc;
                // @ts-ignore
                this._usuarioService.setEstado(this.usuario);
                this._router.navigate(['/painel'])
            },
            err => {
                this._tratarError(err.error);
            }
        );
    }

    _tratarError(erro) {
        if (erro.field) {
            this.usuarioLogin.get(erro.field).setErrors({errorLogin: {message: erro[erro.field]}});
        } else {
            this.showErrorModal = true;
            this.errorMessage = erro.error;
        }
    }
}
