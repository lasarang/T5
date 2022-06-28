import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { AuthService } from "src/app/services/auth/auth.service";
import { FirestoreService } from "src/app/services/firestore/firestore.service";
import { Orden } from "../../models/models";

@Component({
  selector: "app-ordenes",
  templateUrl: "./ordenes.component.html",
})
export class OrdenesComponent implements OnInit {
  ordenes: Orden[] = [];
  urlOrden: string = "";

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.loadOrdenes();
  }

  private loadOrdenes() {
    this.authService.userData
      .pipe(
        switchMap((auth) => {
          if (auth) {
            return this.firestoreService.getCollection(
              `users/${auth.uid}/ordenes/`
            );
          } else {
            return [];
          }
        })
      )
      .subscribe((ordenes) => {
        this.ordenes = ordenes as Orden[];
      });
  }

  setUrl(url: string) {
    this.urlOrden = url;
  }
}
