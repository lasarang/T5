import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    pwd: new FormControl(''),
  });

  constructor(private router: Router, 
    private authService: AuthService
    ) { }

  ngOnInit() {}

  async onLogin(){
    const {email, pwd} = this.loginForm.value;
    
    try{
      const user = await this.authService.login(email, pwd);
    if(user){
      this.router.navigate(['/users/home']);
    }
    }catch(e){
      console.log("error de login: ", e)
    }
  }
}