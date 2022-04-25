import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, 
    private afAuth: AuthService
    ) { }

  ngOnInit() {}

  logOut(){
    this.afAuth.logout();
    this.router.navigate(['/login']);
  }

}