import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;}
@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  
}
