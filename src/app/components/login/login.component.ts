import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  unsuccessAlert: boolean = false;
  email: string = "";
  password: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  async onLogin() {
    const user = await this.authService.login(this.email, this.password);
    if (user) {
      this.moveToHome();
    }else{
      this.enableUnsuccessAlert();
    }
  }

  enableUnsuccessAlert() {
    this.unsuccessAlert = true;
  }

  disableUnsuccessAlert() {
    this.unsuccessAlert = false;
  }

  private moveToHome() {
    this.router.navigate(["/users/home"]);
  }
}
