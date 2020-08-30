import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {nomeValidator} from "../shared/custom-validators";
import {UsuarioService} from "../shared/service/usuario.service";
import {Usuario} from "../model/Usuario";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
    selector: 'app-cadatro-usuario',
    templateUrl: './cadatro-usuario.component.html',
    styleUrls: ['./cadatro-usuario.component.css']
})
export class CadatroUsuarioComponent implements OnInit {

    usuario: Usuario = {
        nome: '',
        email: '',
        cpf: '',
        telefone: ''
    }

    usuarioForm;
    showErrorModal = false;
    errorMessage = '';

    isAtualizar = false;

    titulo = 'Cadastro usuário';

    constructor(private _usuarioService: UsuarioService,
                private router: Router,
                private _location: Location) {
    }

    ngOnInit() {
        if (this._usuarioService.getEstado() && this._usuarioService.getEstado().id) {
            this.usuario = this._usuarioService.getEstado();
            this.titulo = 'Atualizar dados do usuário';
            this.isAtualizar = true;
        }

        this.usuarioForm = new FormGroup({
            nome: new FormControl('', [
                Validators.minLength(3),
                Validators.required,
                nomeValidator(/^([a-zA-Z]{3,})(?: [a-zA-Z]+){0,2}$/)
            ]),
            email: new FormControl('', [
                Validators.email,
                Validators.required
            ]),
            cpf: new FormControl('', [
                Validators.required
            ]),
            telefone: new FormControl('', [
                Validators.required
            ])
        });
    }

    get nome() {
        return this.usuarioForm.get('nome');
    }

    get email() {
        return this.usuarioForm.get('email');
    }

    get cpf() {
        return this.usuarioForm.get('cpf');
    }

    get telefone() {
        return this.usuarioForm.get('telefone');
    }

    cadastrarNovoUsuario() {
        this._sanitizeDados();
        this._usuarioService.cadastrarUsuario(this.usuario).then(
            suc => {
                this.usuario = suc;
                // @ts-ignore
                this._usuarioService.setEstado(this.usuario);
                this.router.navigate(['/painel']);
            },
            err => {
                this._tratarError(err.error);
            }
        );
    }

    atualizarDadosUsuario() {
        this._sanitizeDados();
        this._usuarioService.atualizarUsuario(this.usuario).then(
            suc => {
                this.usuario = suc;
                // @ts-ignore
                this._usuarioService.setEstado(this.usuario);
                this.router.navigate(['/painel']);
            },
            err => {
                this._tratarError(err.error);
            }
        );
    }

    voltar() {
        this._location.back();
    }

    private _tratarError(erro) {
        if (erro.field) {
            this.usuarioForm.get(erro.field).setErrors({errorCadastro: {message: erro[erro.field]}});
        } else {
            this.showErrorModal = true;
            this.errorMessage = erro.error;
        }
    }

    private _sanitizeDados() {
        this.usuario.cpf = this.usuario.cpf
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        this.usuario.telefone = this.usuario.telefone
            .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    }

}
