import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/models/models";
import { AuthService } from "src/app/services/auth/auth.service";
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  password: string = "";
  repeatPassword: string = "";

  newUser: Usuario = {
    cedula: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    direccion: "",
    fechaNacimiento: "",
    generoLegal: "",
    estadoCivil: "",
    seguro: "",
    ocupacion: "",
    discapacidad: "",
    grupoSanguineo: "",
    talla: 0,
    peso: 0,
    id: "",
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  onRegister() {
    this.authService
      .register(this.newUser.email, this.repeatPassword)
      .then((res) => {
        if (res?.user != null && this.password == this.repeatPassword) {
          this.newUser.id = res.user.uid;
          this.firestoreService.createDocId(
            this.newUser,
            "users",
            res.user.uid
          );
        }
      });

    this.moveToLogin();
  }

  private moveToLogin() {
    this.router.navigate(["/login"]);
  }
}
