import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthService{
  public userData: Observable<any>;

  constructor(private afAuth: AngularFireAuth){
    this.userData = this.afAuth.authState;
    
  }


  async login(cedula: string, pwd: string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(cedula, pwd);
    }catch(e){
      console.log("No se puedo logear: "+e);
    }
    return;
  }

  async register(cedula: string, pwd: string){
    try{
       return await this.afAuth.createUserWithEmailAndPassword(cedula, pwd);
    }catch(e){
      console.log("No se puedo registrar: "+e);
    }
    return;
  }

  async resetPwd(email: string){
    try{
      return await this.afAuth.sendPasswordResetEmail(email);
   }catch(e){
     console.log("No se puedo cambiar la contraseña: "+e);
   }
   return;
  }

  async logout(){
    try{
      await this.afAuth.signOut();
      console.log("Saliendo... ");
    }catch(e){
      console.log("No se puedo salir: "+e);
    }
  }

}