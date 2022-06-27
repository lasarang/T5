import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['../portada/portada.component.css']
})
export class LabResultsComponent implements OnInit {
  successAlert: boolean = false;
  unsuccessAlert: boolean = false;
  idOrden: string = '';
  urlResultado: string = '';

  constructor(
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit(): void { }

  enviarSolicitud() {
    var delBtn = confirm('¿Está seguro que desea enviar esta solicitud de resultados?');
    if (delBtn == true) {
      this.firestoreService.getDoc('examenes', this.idOrden).subscribe(resultado => {
        try{
          const url = (resultado as Resultado).urlResultado;
          if (url) this.urlResultado = url;
          this.enableSuccessAlert();
        }catch(e){
          this.enableUnsuccessAlert();
        }
        
      });
    }
  }

  enableUnsuccessAlert(){
    this.unsuccessAlert = true;
  }

  disableUnsuccessAlert(){
    this.unsuccessAlert = false;
  }

  enableSuccessAlert(){
    this.successAlert = true;
  }

  disableSuccessAlert(){
    this.successAlert = false;
  }


}
