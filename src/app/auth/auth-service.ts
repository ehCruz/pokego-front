import {Injectable} from "@angular/core";
import {Usuario} from "../model/Usuario";
import {UsuarioService} from "../shared/service/usuario.service";

@Injectable()
export class AuthService {
    constructor(private _usuarioService: UsuarioService) {
    }

    isAuthenticated(): boolean {
        const usuario: Usuario = this._usuarioService.getEstado();
        return usuario && (!!usuario.email && !!usuario.cpf);
    }
}