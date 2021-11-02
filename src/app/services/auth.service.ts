import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private firestore: AngularFirestore) { }

 async login(email:string,password:string){
   try{
      return await this.afauth.signInWithEmailAndPassword(email,password);

   }catch(err){
    console.log("error en login",err);
    return null;
   }
 }
 async loginWithGoogle(email:string,password:string){
  try{
     return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }catch(err){
   console.log("error en login con google",err);
   return null;
  }
}
async register(email:string,password:string){
  try{
     return await this.afauth.createUserWithEmailAndPassword(email,password);

  }catch(err){
   console.log("error en login",err);
   return null;
  }
}

getUserlogged(){
  return this.afauth.authState;
}
logout(){
  this.afauth.signOut();
}

//CRUD//

async create(collection,dato){
try{
  return await this.firestore.collection(collection).add(dato)
}catch(error){
  console.log("error en: create",error)
}
}


async getAll(collection){
try{
  return await this.firestore.collection(collection).snapshotChanges()
}catch(error){
  console.log("error en: getAll",error)
}
}


async getById(collection,id){
  try{
    return await this.firestore.collection(collection).doc(id).get();
  }catch(error){
    console.log("error en: getById",error)
  }
  }


  async delete(collection, id){
    try{
      return await this.firestore.collection(collection).doc(id).delete();
    }catch(error){
      console.log("error en: delete",error)
    }

    }
    async update(collection, id, dato){
      try{
        return await this.firestore.collection(collection).doc(id).set(dato);
      }catch(error){
        console.log("error en: update",error)
      }
      }
}