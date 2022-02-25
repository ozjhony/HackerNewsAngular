import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosGenerales } from '../config/datos.generales';
import { Observable } from 'rxjs';
import {Noticia } from '../modelos/noticia.modelo';
import { Onews } from '../modelos/Onews.modelo';
import { pluck } from 'rxjs/operators';

interface Respuesta{
  hits:Noticia[];

}

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {
  url: String = DatosGenerales.url;
  
  constructor(private http:HttpClient) { 

  }


  getONews(term1:String, term2:String): Observable<Onews> {
     return this.http.get<Onews>(`http://hn.algolia.com/api/v1/search`);
  }

  busqueda(term1:String, term2:String):Observable<Noticia[]>{

    return this.http.get<Respuesta>('http://hn.algolia.com/api/v1/search?query='+term1+'&tags=story').pipe(pluck('hits'));
  }
   
  
}
