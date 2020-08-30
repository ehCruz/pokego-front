import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";
import {Observable} from "rxjs";
import {UrlService} from "./url-service";

@Injectable({
    providedIn: "root"
})
export class BuscarService {

    constructor(private _http: HttpClient,
                private _urlService: UrlService,
                private _usuarioService: UsuarioService) {
    }

    buscar(termo: string):Observable<any> {
        const id = this._usuarioService.getEstado().id;
        const url = `${this._urlService.getUrlBusca()}?uId=${id}&termo=${termo}`;

        return this._http.get(url);
    }
}