import { Component } from '@angular/core';
import { BREAKPOINT } from '@angular/flex-layout';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { enviroment } from 'projects/app-gsi/src/enviroment/enviroment';
import { KeypadButton } from '../../../shared/interfaces/keypadbutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadataColumn.interface';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'gsi-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  registros:any[]=[
    {_id:1, nombresCompletos:'Carlos Ayala', direccion:'AV. Quito', fechaNacimiento:'01/01/1980', celular:'0999999999'},
    {_id:2, nombresCompletos:'Demo Dark', direccion:'AV. Quito 2', fechaNacimiento:'01/01/1988', celular:'0888888888'},
    {_id:3, nombresCompletos:'Carla Marriosn', direccion:'AV. Quito 3', fechaNacimiento:'01/01/1990', celular:'077777777'},
    {_id:4, nombresCompletos:'klever Fidel', direccion:'AV. Quito 4', fechaNacimiento:'01/01/1999', celular:'099996564'},
    {_id:5, nombresCompletos:'Jhon Valles', direccion:'AV. Quito 5', fechaNacimiento:'01/01/1989', celular:'099996459'},
    {_id:6, nombresCompletos:'Carlos Ayala', direccion:'AV. Quito', fechaNacimiento:'01/01/1980', celular:'0999999999'},
    {_id:7, nombresCompletos:'Demo Dark', direccion:'AV. Quito 2', fechaNacimiento:'01/01/1988', celular:'0888888888'},
    {_id:8, nombresCompletos:'Carla Marriosn', direccion:'AV. Quito 3', fechaNacimiento:'01/01/1990', celular:'077777777'},
    {_id:9, nombresCompletos:'klever Fidel', direccion:'AV. Quito 4', fechaNacimiento:'01/01/1999', celular:'099996564'},
    {_id:10, nombresCompletos:'Jhon Valles', direccion:'AV. Quito 5', fechaNacimiento:'01/01/1989', celular:'099996459'},
    {_id:11, nombresCompletos:'Carlos Ayala', direccion:'AV. Quito', fechaNacimiento:'01/01/1980', celular:'0999999999'},
    {_id:12, nombresCompletos:'Demo Dark', direccion:'AV. Quito 2', fechaNacimiento:'01/01/1988', celular:'0888888888'},
    {_id:13, nombresCompletos:'Carla Marriosn', direccion:'AV. Quito 3', fechaNacimiento:'01/01/1990', celular:'077777777'},
    {_id:14, nombresCompletos:'klever Fidel', direccion:'AV. Quito 4', fechaNacimiento:'01/01/1999', celular:'099996564'},
    {_id:15, nombresCompletos:'Jhon Valles', direccion:'AV. Quito 5', fechaNacimiento:'01/01/1989', celular:'099996459'}
  ]
  metaDataColumns:MetaDataColumn[]=[
    {field:'_id', title :'ID'},
    {field:'nombresCompletos', title :'NOMBRES'},
    {field:'direccion', title :'DIRECCION'},
    {field:'fechaNacimiento', title :'FECHA NACIMIENTO'},
    {field:'celular', title :'CELULAR'}

  ]
  data:any[]=[]
  totalRegistro=this.data.length

  constructor(private dialog:MatDialog){
    this.caragarClientes();
  }
  caragarClientes(){
    this.data=this.registros
    this.totalRegistro= this.data.length
    this.changePage(0)
  }
  changePage(page:number){
    const pageSize = enviroment.PAGE_SIZE
    const salto= pageSize*page
    this.data=this.registros.slice(salto, salto+pageSize)
  }
  abrirFormulario(fila:any=null  ){
    const opciones={
      panelClass: 'panel-container',
      disableClose:true,
      data:fila
    }
    const refrencia:MatDialogRef<FormComponent>=this.dialog.open(FormComponent,opciones)
  }
  eliminar(){}
  keypadButtons:KeypadButton[]=[
    {
      icon:"cloud_download", tooltip:"EXPORTAR", color:"accent", accion:"DOWNLOAD"},
      {icon:"add", tooltip:"AGREGAR", color:"primary", accion:"NUEVO"
    }
  ]

  enviarAccion(accion:string){

    switch(accion){
      case 'DOWNLOAD':
        break
        case 'NUEVO':
         this.abrirFormulario();
        break

    }

  }

}
