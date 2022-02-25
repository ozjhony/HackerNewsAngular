import { Component, OnInit } from '@angular/core';
import { Onews } from 'src/app/modelos/Onews.modelo';
import { prueba } from 'src/app/modelos/prueba.modelo';
import { HackerNewsApiService } from 'src/app/services/hacker-news-api.service';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {
   listp:prueba[];
   Onews:Onews;

  constructor(private hakerService: HackerNewsApiService) {
     
    console.log("datos de la lista" + ' ' + this.listp)
   }


  ngOnInit(): void {
    this.getAllPrueba();
    this.getAllOnews();

  }
  
  getAllPrueba(){
    this.hakerService.getPrueba().subscribe(
      data=>{
        this.listp=data
        console.log("hola");
       }
       
    )
   }

   getAllOnews(){
    this.hakerService.getONews().subscribe (
      data=>{
        this.Onews=data;  
       }
       
    )}
}
