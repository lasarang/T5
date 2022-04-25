import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { Certificado } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[]=[];
  currentUrl:any='';

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private afs: FirestoreService

    ) { }

  ngOnInit(): void {
    this.loadCertificados();
  }

  private loadCertificados(){

    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/certificados/')
        } else {
            return [];
        }
      })
    ).subscribe(certificados =>{
      this.certificados = certificados as Certificado[];
    });
    
  }

  setUrl(url: string){

    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.currentUrl);

  }

}
