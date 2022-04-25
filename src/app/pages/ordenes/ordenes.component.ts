import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Orden } from '../../models/models';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenes: Orden[]=[];
  currentUrl:any='';

  constructor(
    private sanitizer: DomSanitizer,
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
            return this.afs.getCollection('users/'+auth.uid+'/ordenes/');
        } else {
            return [];
        }
      })
    ).subscribe(ordenes =>{
      this.ordenes = ordenes as Orden[];
    });

  }

  setUrl(url: string){

    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.currentUrl);

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
