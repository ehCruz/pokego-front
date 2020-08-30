import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UrlService} from "./url-service";

@Injectable({
    providedIn: "root"
})
export class PokemonApiService {

    constructor(private _http: HttpClient,
                private _urlService: UrlService) {
    }

    async getListaDePokemon(offset:number, limit: number): Promise<any> {
        return await this._http
            .get(`${this._urlService.getUrlApiPokemon()}?offset=${offset}&limit=${limit}`)
            .toPromise();
    }

    async getPokemonFromURL(url: string) {
        return await this._http.get(url).toPromise();
    }

}