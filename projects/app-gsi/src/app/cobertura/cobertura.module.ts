import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoberturaRoutingModule } from './cobertura-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CoberturaRoutingModule
  ]
})
export class CoberturaModule { }
