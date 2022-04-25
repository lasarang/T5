import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  userEmail: string='';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onReset(){
    console.log("Enviando solicitud de cambio de contraseña al correo...");
    this.auth.resetPwd(this.userEmail);
    this.router.navigate(['/login']);
  }

}
