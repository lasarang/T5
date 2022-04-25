import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/models/models';

import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Receta[]=[];
  currentUrl:any='';

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private afs: FirestoreService

    ) { }



  ngOnInit(): void {
    this.loadRecetas();
  }

  private loadRecetas(){

    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/recetas/')
        } else {
            return [];
        }
      })
    ).subscribe(recetas =>{
      this.recetas = recetas as Receta[];
    });
    
  }

  setUrl(url: string){

    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.currentUrl);

  }
}
