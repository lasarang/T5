import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Examen } from '../../models/models';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  examenes: Examen[]=[];
  currentUrl:any='';

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private afs: FirestoreService

    ) { }

  ngOnInit() {
    this.loadExamenes();
  }

  private loadExamenes(){

    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/resultados/')
        } else {
            return [];
        }
      })
    ).subscribe(examenes =>{
      this.examenes = examenes as Examen[];
    });
    
  }

  setUrl(url: string){

    this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.currentUrl);

  }
}