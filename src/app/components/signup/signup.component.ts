import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    cedula: new FormControl(''),
    direccion: new FormControl(''),
    pwd: new FormControl(''),
    rptpwd: new FormControl(''),
  });

  constructor(private router:Router, 
    private authService: AuthService,
    private afs: FirestoreService
    ) { }

  ngOnInit() {}

  onRegister(){
    const {cedula, nombres, apellidos, telefono, email, direccion, pwd, rptpwd} = this.registerForm.value;
    // console.log(this.registerForm.value);
    this.authService.register(email, rptpwd).then(res =>{
      if(res?.user != null && pwd ==rptpwd){
        this.afs.createDocId(
          {
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            email: email,
            direccion: direccion,
            password: rptpwd,
    
            dob: '',
            groLegal: '',
            estadoCivil: '',
            seguro: '',
            ocupacion: '',
            discapacidad: '',
            gpoSanguineo: '',
            talla: 0,
            peso: 0,
            id: res.user.uid
          }
          , "users", res.user.uid );
      }
    });
     
    //console.log({email, rptpwd});
    this.router.navigate(['/login']);
  }

}
