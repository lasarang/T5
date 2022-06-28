import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public userData: Observable<any>;

  constructor(private fireAuth: AngularFireAuth) {
    this.userData = this.fireAuth.authState;
  }

  async login(cedula: string, pwd: string) {
    try {
      return await this.fireAuth.signInWithEmailAndPassword(cedula, pwd);
    } catch (e) {}
    return;
  }

  async register(email: string, password: string) {
    try {
      return await this.fireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (e) {}
    return;
  }

  async resetPwd(email: string) {
    try {
      return await this.fireAuth.sendPasswordResetEmail(email);
    } catch (e) {}
    return;
  }

  async logout() {
    try {
      await this.fireAuth.signOut();
    } catch (e) {}
  }
}