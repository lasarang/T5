import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  logOut() {
    this.authService.logout();
    this.moveToLogin();
  }

  private moveToLogin() {
    this.router.navigate(['/login']);
  }

}