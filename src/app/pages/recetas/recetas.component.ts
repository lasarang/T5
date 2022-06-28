import { Component, OnInit } from "@angular/core";
import { Receta } from "src/app/models/models";
import { switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: "app-recetas",
  templateUrl: "./recetas.component.html",
})
export class RecetasComponent implements OnInit {
  recetas: Receta[] = [];
  urlReceta: string = "";

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.loadRecetas();
  }

  private loadRecetas() {
    this.authService.userData
      .pipe(
        switchMap((auth) => {
          if (auth) {
            return this.firestoreService.getCollection(
              `users/${auth.uid}/recetas/`
            );
          } else {
            return [];
          }
        })
      )
      .subscribe((recetas) => {
        this.recetas = recetas as Receta[];
      });
  }

  setUrl(url: string) {
    this.urlReceta = url;
  }
}
