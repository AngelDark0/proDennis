import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageListComponent } from './stock/pages/page-list/page-list.component';
import { FormComponent } from './stock/components/form/form.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
