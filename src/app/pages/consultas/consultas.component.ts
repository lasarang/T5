import { Component, OnInit } from '@angular/core';
import { SolicitudConsulta } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['../portada/portada.component.css']
})
export class ConsultasComponent implements OnInit {

  solicitudConsulta: SolicitudConsulta = {
    cedula: '',
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    fecha: '',
    area: '',
    motivo: ''
  }

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {}

  enviarSolicitud() {
    var delBtn = confirm('¿Está seguro que desea enviar esta solicitud de consulta?');
    if (delBtn == true) {
      this.firestoreService.createDoc(this.solicitudConsulta, 'consultas');
    }
  }

}
