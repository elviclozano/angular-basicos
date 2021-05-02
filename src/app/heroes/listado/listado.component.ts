import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  
  arrHeroes: string[]=['Spiderman','Ironman','Hulk','Birdman','Wonderwoman'];
  hb:string='';

  borrarHeroe():void{
    this.hb=this.arrHeroes.shift() || '';
  }

}
