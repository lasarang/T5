import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  email: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onReset() {
    this.auth.resetPwd(this.email);
    this.moveToLogin();
  }

  private moveToLogin() {
    this.router.navigate(['/login']);
  }

}
