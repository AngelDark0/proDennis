import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicoRoutingModule } from './tecnico-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    TecnicoRoutingModule
  ]
})
export class TecnicoModule { }
