import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Cita } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas: Cita[]=[];

  constructor(
    private authService: AuthService,
    private afs: FirestoreService
  ) { }

  ngOnInit() {
    //Cargando las ordenes
    this.loadOrdenes();
  }

  private loadOrdenes(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
            return this.afs.getCollection('users/'+auth.uid+'/citas/');
        } else {
            return [];
        }
      })
    ).subscribe(citas =>{
      this.citas = citas as Cita[];
    });

  }

  setUserColor(state:any) {
    switch (state) {
      case 'Pendiente':
        return 'rgb(51, 108, 251)';
      case 'En proceso':
        return 'rgb(52, 238, 174)';
      case 'Finalizado':
        return 'rgb(255, 126, 119)';
    }
    return;
  }

}
