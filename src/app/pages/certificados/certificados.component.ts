import { Component, OnInit } from "@angular/core";
import { switchMap } from "rxjs";
import { Certificado } from "src/app/models/models";
import { AuthService } from "src/app/services/auth/auth.service";
import { FirestoreService } from "src/app/services/firestore/firestore.service";

@Component({
  selector: "app-certificados",
  templateUrl: "./certificados.component.html",
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];
  urlCertificado: string = "";

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.loadCertificados();
  }

  private loadCertificados() {
    this.authService.userData
      .pipe(
        switchMap((auth) => {
          if (auth) {
            return this.firestoreService.getCollection(
              `users/${auth.uid}/certificados/`
            );
          } else {
            return [];
          }
        })
      )
      .subscribe((certificados) => {
        this.certificados = certificados as Certificado[];
      });
  }

  setUrl(url: string) {
    this.urlCertificado = url;
  }
}
