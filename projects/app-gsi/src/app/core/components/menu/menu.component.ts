import { Component, EventEmitter, Output } from '@angular/core';
import { Imenu, MenuService } from '../../../helper/services/menu.service';

@Component({
  selector: 'gsi-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  listaMenu:Imenu[]
expandido=false
@Output()onValidarExpandido:EventEmitter<boolean>= new EventEmitter<boolean>//salida de un componente hacia otro componente


  constructor(private menuServicio:MenuService){
     {
      this.listaMenu= menuServicio.getMenu();
      
    }
  }
  validarExpandido(){
    this.expandido=!this.expandido
    this.onValidarExpandido.emit(this.expandido)

  }

}
