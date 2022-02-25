import { Component, OnInit } from '@angular/core';
import { Onews } from 'src/app/modelos/Onews.modelo';
import { Noticia } from 'src/app/modelos/noticia.modelo';
import { HackerNewsApiService } from 'src/app/services/hacker-news-api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {
   listaNoticia: Noticia[];
   Onews:Onews;

  constructor(private hakerService: HackerNewsApiService) {
     
   }


  ngOnInit(): void {
    this.getAllOnews();
    this.busqueda();

  }

  busqueda():void{
    this.hakerService.busqueda('t1','t2').pipe(

      tap(data =>
        this.listaNoticia=data
        )
      ).subscribe();
  }


   getAllOnews(){
    this.hakerService.getONews('t1','t2').subscribe (
      data=>{
        this.Onews=data;  
       }
       
    )}
}
