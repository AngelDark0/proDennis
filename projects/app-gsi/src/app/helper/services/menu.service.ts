import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
 export interface Imenu{
  title: string,
  url: string,
  icon:string

}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listaMenu:Imenu[]=[
    {title: 'Clientes', url:'/clientes', icon :'/assets/icons/client.svg'},
    {title: 'Cobertura', url:'/cobertura', icon :'/assets/icons/cobertura.svg'},
    {title: 'Planes', url:'/planes', icon :'/assets/icons/planes.svg'},
    {title: 'Proveedores', url:'/proveedores', icon :'/assets/icons/proveedor-com.svg'},
    {title: 'Soporte', url:'/soporte', icon :'/assets/icons/suport.svg'},
    {title: 'Stock', url:'/stock', icon :'/assets/icons/stock.svg'},
    {title: 'Técnico', url:'/tecnicos', icon :'/assets/icons/technical-support.svg'},
    {title: 'Usuarios', url:'/usuarios', icon :'/assets/icons/usuario.svg'},
   ]

  constructor() { }
  getMenu():Imenu[]{
    return[...this.listaMenu]
  }//devuelve una copia del areglo
  getMenuByUrl(url:string):Imenu{
    return this.listaMenu.find(
      (menu)=>menu.url.toLowerCase()=== url.toLowerCase()
    ) as Imenu
  }
}
