import { Component, inject, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../type/personaje';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  
  ngOnInit(): void {
      this.addLista()
    }
    servicio = inject(PersonajeService);
    ruta = inject(Router);
    
    lista: Personaje[] =[];

    addLista(){
      this.servicio.getPersonaje().subscribe({
        next:(personaje: Personaje[]) =>{
          this.lista = personaje;
        },
        error:(e: Error) =>{
          console.log("error lista");
        }
      })
    };

    fnEliminar(id: string | undefined){
      this.servicio.deletePersonaje(id).subscribe({
        next: (personaje : Personaje) => {
          console.log("personaje eliminado nombre " + personaje.name);
          this.addLista();
        },
        error: (e:Error) =>{
          console.log(e.message);
        }
      })
    }

    fnVerDetalles(id:string | undefined){
      this.ruta.navigate([`detalles/${id}`])
    }



}

