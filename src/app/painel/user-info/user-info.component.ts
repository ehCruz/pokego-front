import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../model/Usuario";
import {UsuarioService} from "../../shared/service/usuario.service";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    usuario: Usuario = {};

    constructor(private _usuarioService: UsuarioService) {
    }

    ngOnInit() {
        this.usuario =  this._usuarioService.getEstado();
        console.log(this.usuario)
    }

}
