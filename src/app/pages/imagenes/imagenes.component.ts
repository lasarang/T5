import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Imagen } from '../../models/models';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  imagenes: Imagen[] = [];

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.loadImagenes();
  }

  private loadImagenes() {
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.firestoreService.getCollection(`users/${auth.uid }/imagenes/`)
        } else {
          return [];
        }
      })
    ).subscribe(imagenes => {
      this.imagenes = imagenes as Imagen[];
    });
  }

}