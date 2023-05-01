
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';


@Component({
  selector: 'gsi-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
   titulo=''
   formulario!:FormGroup

   constructor(private refrencia:MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) public data:any){
    this.titulo=data?'EDICION':'NUEVO'
    
   }
  ngOnInit(): void {
    this.cargarFormulario();
  }
   grabar(){
    
  
  
   }

   cargarFormulario(){
    this.formulario= new FormGroup({
      id: new FormControl(this.data?._id),
      nombresCompletos:new FormControl(this.data.nombresCompletos, Validators.required),
      direccion:new FormControl(this.data.direccion, Validators.required),
      fechaNacimiento:new FormControl(this.data.fechaNacimiento, Validators.required),
      celular:new FormControl(this.data.celular),
      

    })
   }


}
