import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Info } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  info: Info={
    id: '',
    direccion: '',
    movil: '',
    fijo: '',
    correo: ''
  };

  constructor(
    private authService: AuthService,
    private afs: FirestoreService
    ) {}


  ngOnInit(): void {
    this.loadInfo();
  }

  private loadInfo(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getDoc('informacion', 'Zjtt3hBEaT7kLPiAXisG');
        } else {
            return [];
        }
      })
    ).subscribe(info =>{
      this.info = info as unknown as Info;
    });
  }

}
