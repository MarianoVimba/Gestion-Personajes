import { Personaje } from './../../type/personaje';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  implements OnInit{
  
  id: string | null = '';
  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.getPersonaje(this.id);
    });
  }
  
  ruta = inject(ActivatedRoute);
  servicio = inject(PersonajeService);
  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    name: [""],
    powers: [""],
    descripcion:[""]
  });

  getPersonaje(id: string | null){
      this.servicio.getPersonajeById(id).subscribe({
        next:(personaje: any) =>{
          console.log("personaje obtenido " + personaje.name);
          this.setPersonaje(personaje);
        },
        error:() => {
          console.log("eror");
        }
      })
  };

  setPersonaje(personaje: Personaje){
    this.formulario.controls['name'].setValue(personaje.name);
   // this.formulario.controls['alias'].setValue(personaje.alias);
    this.formulario.controls['powers'].setValue(personaje.powers);
    this.formulario.controls['descripcion'].setValue(personaje.descripcion);
  }

  actualizar(){
    if(this.formulario.invalid)return;
    const personajeAct = this.formulario.getRawValue();
    this.servicio.updatePersonaje(this.id,personajeAct).subscribe({
      next:() =>{
        alert("actualizado");
      },
      error:() => {
        console.log("error");
      }
    })
  };



}
