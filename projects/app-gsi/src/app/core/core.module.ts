import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import {FlexLayoutModule}from '@angular/flex-layout';
import { PagesLoginComponent } from './pages/pages-login/pages-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    PagesLoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    PagesLoginComponent
  ]
})
export class CoreModule { }
