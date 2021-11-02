import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = {
  email: '',
  password: ''
}
constructor(private authService: AuthService) { }
Ingresar(){
  
  const{email,password} = this.usuario;
  this.authService.register(email,password).then(res=> {
    console.log("se registró: ",res);
  })
}
IngresarConGoogle(){
  console.log(this.usuario)
  const{email,password} = this.usuario;
  this.authService.loginWithGoogle(email,password).then(res=> {
    console.log("se registró: ",res);
  })
}
obtenerUsuarioLogeado(){
  this.authService.getUserlogged().subscribe(res=>{
    console.log(res?.email);
  });
}
logout(){
  this.authService.logout();
}


  

  ngOnInit() {
  }

}
