import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    PlanesRoutingModule
  ]
})
export class PlanesModule { }
