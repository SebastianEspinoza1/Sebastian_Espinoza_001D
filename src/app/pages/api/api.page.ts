import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Article } from '../../interfaces/interfaces'; 
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  noticias: Article[] = []

  constructor(private apiService: ApiService,private menuController: MenuController) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp =>{
      console.log('noticias', resp);

      this.noticias.push(...resp.articles);
    });

  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  option ={

  }

}
