import { Component, inject } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Personaje } from '../../type/personaje';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    servicio = inject(PersonajeService);
    fb = inject(FormBuilder);

    formulario = this.fb.nonNullable.group({
      name: ["",[Validators.required]],
      alias:["",[Validators.required]],
      powers:["",[Validators.required]],
      descripcion:[""]
    });

    addPersonaje(){
      if(this.formulario.invalid) return;
      const personajeNuevo = this.formulario.getRawValue();
      this.agregarBd(personajeNuevo);
      this.formulario.reset({
        name:"",
        alias:"",
        powers:"",
        descripcion:""
      });
    }

    agregarBd(personaje:Personaje){
        this.servicio.postPersonaje(personaje).subscribe(
        {
          next: (personaje1:Personaje) =>{
            alert("personaje agregado")
          },
          error: (e: Error) => {
            console.log("error" + e.message);
          }
        })
    };


}
