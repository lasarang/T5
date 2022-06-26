import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  async onLogin() {
    const user = await this.authService.login(this.email, this.password);
    if (user) {
     this.moveToHome();
    }
  }

  private moveToHome(){
    this.router.navigate(['/users/home']);
  }
}