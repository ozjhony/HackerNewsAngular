import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosGenerales } from '../config/datos.generales';
import { Observable } from 'rxjs';
import { prueba } from '../modelos/prueba.modelo';
import { Onews } from '../modelos/Onews.modelo';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {
  url: String = DatosGenerales.url;
  
  constructor(private http:HttpClient) { 

  }


  getPrueba(): Observable<prueba[]> { 
    return this.http.get<prueba[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  getONews(): Observable<Onews> {
     return this.http.get<Onews>(`http://hn.algolia.com/api/v1/search`);
  }
}
