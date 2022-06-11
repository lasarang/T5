import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarSolicitud() {
    var delBtn = confirm('¿Está seguro que desea enviar esta solicitud de consulta?');
    if (delBtn == true) {
      console.log("Enviando solicitud...")
    }
  }

}
