import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesLoginComponent } from './core/pages/pages-login/pages-login.component';

const routes: Routes = [
  {path:'',component:PagesLoginComponent },
  {path:'clientes', loadChildren:()=>import('./clientes/clientes.module').then((m)=>m.ClientesModule)},
  {path:'planes', loadChildren:()=>import('./planes/planes.module').then((m)=>m.PlanesModule)},
  {path:'cobertura', loadChildren:()=>import('./cobertura/cobertura.module').then((m)=>m.CoberturaModule)},
  {path:'proveedores', loadChildren:()=>import('./clientes/clientes.module').then((m)=>m.ClientesModule)},
  {path:'soporte', loadChildren:()=>import('./soporte/soporte.module').then((m)=>m.SoporteModule)},
  {path:'stock', loadChildren:()=>import('./stock/stock.module').then((m)=>m.StockModule)},
  {path:'tecnicos', loadChildren:()=>import('./tecnico/tecnico.module').then((m)=>m.TecnicoModule)},
  {path:'usuarios', loadChildren:()=>import('./usuarios/usuarios.module').then((m)=>m.UsuariosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
