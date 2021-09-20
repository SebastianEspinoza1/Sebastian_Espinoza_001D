import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  usuario = {
    email:'',
    password:'',
    nombre:'',
    genero:'',
    celular:''
  }
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Bienvenido a Medipets',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}