import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {GLOBAL} from './global';

@Injectable()
export class MovieService{
    public url: string;
    private apiUrlPopular = 'http://api.themoviedb.org/3/movie/popular';
    private apiUrlOneMovie = 'http://api.themoviedb.org/3/movie/';
    private apiKey = '9bcfb7343161df5d83e8fd3f601e2c97';

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    getMovies(){
        return this._http.get<any>(`${this.apiUrlPopular}?api_key=${this.apiKey}`);
    }

    getOneMovies(ruta: any){

        const headers = new HttpHeaders({
            'accept': 'application/json',
            'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmNmYjczNDMxNjFkZjVkODNlOGZkM2Y2MDFlMmM5NyIsInN1YiI6IjY0YmZmNGQ4OGVlNDljMGZjY2IwOTljOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C4MSL3M9k-oqy7YLgQtI5znDYUM5MNtAVzw3sPgFRow'
          });

        return this._http.get<any>(`${this.apiUrlOneMovie+ruta}?api_key=${this.apiKey}`, { headers: headers });
    }

}