import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../type/personaje';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() personajeList!:Personaje;
    @Output() eliminar = new EventEmitter<String>();
    @Output() verDetalles = new EventEmitter<String>();

    fnEliminar(){
      this.eliminar.emit(this.personajeList.id);
    }

    fnVerDetalles(){
      this.verDetalles.emit(this.personajeList.id);
    }
}
