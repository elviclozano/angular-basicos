import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //con el decorador @Input le indicamos a angular que 
  // Personajes van a venir desde el componente Padre
  @Input() Personajes:Personaje[]=[]
}
