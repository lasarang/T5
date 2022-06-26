import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<any>;

  constructor(private fireAuth: AngularFireAuth) {
    this.userData = this.fireAuth.authState;
  }

  async login(cedula: string, pwd: string) {
    try {
      return await this.fireAuth.signInWithEmailAndPassword(cedula, pwd);
    } catch (e) {
      console.log("No se puedo logear: " + e);
    }
    return;
  }

  async register(email: string, password: string) {
    try {
      return await this.fireAuth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log("No se puedo registrar: " + e);
    }
    return;
  }

  async resetPwd(email: string) {
    try {
      return await this.fireAuth.sendPasswordResetEmail(email);
    } catch (e) {
      console.log("No se puedo cambiar la contraseña: " + e);
    }
    return;
  }

  async logout() {
    try {
      await this.fireAuth.signOut();
    } catch (e) {
      console.log("No se puedo salir: " + e);
    }
  }

}