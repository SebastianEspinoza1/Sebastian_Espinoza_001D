import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  implements OnInit{
usuario = {

  nombre:'spuketo',
  email:'Sebastian76@gmail.com',
  password:'123456'
}

listaDeUsuarios=[];
  constructor(private database: AuthService,) { }




ngOnInit(){
  this.database.getAll('usuarios').then(firebaseResponse =>{
    firebaseResponse.subscribe(listaDeUsuariosRef =>{

     this.listaDeUsuarios=listaDeUsuariosRef.map(usuarioRef =>{
       let usuario=usuarioRef.payload.doc.data();
       usuario['id']=usuarioRef.payload.doc.id;
       return usuario;

     })
      console.log(this.listaDeUsuarios);

    })
  })

}




altaUsuario() {
    this.database.create('usuarios',this.usuario).then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log("error en alta ", err)

    });
  }

eliminar(id){
    this.database.delete('usuarios', id).then(res => {
      alert("Se eliminó con éxito");
    }).catch(err =>{
      console.log("error al eliminar",err);
    });

  }
modificar(){
  let id="vbfH9d5kBYKhIuq9Fzkj";
  this.database.update('usuarios',id,this.usuario).then(res =>{
    alert("Se modificó usuario");
  }).catch(err=>{
    console.log("Error al modificar")
  })
}



}
