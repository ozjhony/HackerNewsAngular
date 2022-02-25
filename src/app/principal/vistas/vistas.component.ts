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
   w:number=1;
   lista:any[];
   Dato:string;

  constructor(private hakerService: HackerNewsApiService) {
     
   }

   lenguaje(event: any){
     this.busqueda(event.target.value);
     this.GuardarLenguajeLocalStorage(event.target.value);

   }




  ngOnInit(): void {
    this.Dato=this.obtenerDatosLocalStorage();
    this.getAllOnews();
    this.busqueda(this.Dato);
    

  }

  busqueda(term1:String):void{
    this.hakerService.busqueda(term1,'t2').pipe(

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

    GuardarLenguajeLocalStorage(termino:string){
     localStorage.setItem("Lenguaje",termino);
    }

    obtenerDatosLocalStorage(){
      
      return localStorage.getItem("Lenguaje")
      
    }
    
}
