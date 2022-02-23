import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosGenerales } from '../config/datos.generales';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {
  url: String = DatosGenerales.url;
  constructor(private http:HttpClient) { }
}
