import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Cita } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
})
export class CitasComponent implements OnInit {

  citas: Cita[] = [];

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.loadOrdenes();
  }

  private loadOrdenes() {
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {

          return this.firestoreService.getCollection(`users/${auth.uid}/citas/`);
        } else {
          return [];
        }
      })
    ).subscribe(citas => {
      this.citas = citas as Cita[];
    });

  }

}
