import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor() {}

  componentes : Componente[] =[
    {
      icon: 'paw-outline',
      name: 'Cuidado de mascotas', 
      redirecTo: '/page2'
    },
    {
      icon: 'sunny-outline', 
      name: 'Noticias', 
      redirecTo: '/api'
    },
    
  
  ]

}