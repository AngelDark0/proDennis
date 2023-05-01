import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imenu, MenuService } from '../../../helper/services/menu.service';

@Component({
  selector: 'gsi-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  path:Imenu
  constructor(private menuServicio:MenuService,
    private activateRoute:ActivatedRoute){
      const urlActiva='/'+activateRoute.snapshot.pathFromRoot[1].routeConfig?.path
      this.path=menuServicio.getMenuByUrl(urlActiva)
      
    }

}
