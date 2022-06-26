import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Examen } from '../../models/models';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent implements OnInit {
  examenes: Examen[] = [];
  urlResultado: string = '';

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    this.loadExamenes();
  }

  private loadExamenes() {
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.firestoreService.getCollection(`users/${auth.uid }/resultados/`)
        } else {
          return [];
        }
      })
    ).subscribe(examenes => {
      this.examenes = examenes as Examen[];
    });
  }

  setUrl(url: string) {
    this.urlResultado = url;
  }
}