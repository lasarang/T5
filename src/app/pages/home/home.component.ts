import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Contacto, Resumen, Usuario } from '../../models/models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  usuario: Usuario = {
    cedula: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    email: '',
    fechaNacimiento: '',
    generoLegal: '',
    estadoCivil: '',
    seguro: '',
    ocupacion: '',
    discapacidad: '',
    grupoSanguineo: '',
    talla: 0,
    peso: 0,
    id: '',
  };

  resumen: Resumen = {
    consultas: 0,
    examenes: 0,
    medicamentos: 0,
    imagenes: 0,
  };

  contactos: Contacto[] = [];

  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.loadUsuario();
    this.loadContactos();
    this.loadResumen();
  }

  private loadUsuario() {
    this.authService.userData
      .pipe(
        switchMap(auth => {
          if (auth) {
            return this.firestoreService.getDoc('users', auth.uid);
          } else {
            return [];
          }
        })
      )
      .subscribe(user => {
        this.usuario = user as Usuario;
      });
  }

  private loadContactos() {
    this.authService.userData
      .pipe(
        switchMap(auth => {
          if (auth) {
            return this.firestoreService.getCollection(
              `users/${auth.uid}/contactos/`
            );
          } else {
            return [];
          }
        })
      )
      .subscribe(contactos => {
        this.contactos = contactos as Contacto[];
      });
  }

  private loadResumen() {
    this.resumen = {
      consultas: 20,
      examenes: 30,
      medicamentos: 10,
      imagenes: 5,
    };
  }

  updateRowInfo() {
    var delBtn = confirm('¿Está seguro que desea guardar los datos?');
    if (delBtn == true) {
      this.firestoreService.updateDoc('users', this.usuario.id, this.usuario);
    }
  }

  addTableContactos() {
    this.contactos.push({
      id: '',
      relacion: 'nuevo',
      nombres: 'nuevo',
      apellidos: 'nuevo',
      direccion: 'nuevo',
      telefono: 'nuevo',
      email: 'nuevo',
    });
  }

  deleteRowContactos(x: Contacto, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if (delBtn == true) {
      if (x.id == '') {
        this.contactos.splice(i, 1);
        return;
      }
      this.firestoreService.deleteDoc(
        `users/${this.usuario.id}/contactos/`,
        x.id
      );
    }
  }

  updateRowContactos(x: Contacto) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if (this.isContactoValid(x)) {
        this.createNewContacto(x);
      } else if (x.id != '') {
        this.firestoreService.updateDoc(
          `users/${this.usuario.id}/contactos/`,
          x.id,
          x
        );
      }
    }
  }

  createNewContacto(x: Contacto) {
    this.firestoreService.createDoc(x, `users/${this.usuario.id}/contactos/`);
  }

  onContentChanged(event: Event, same: string) {
    const input = (event.target as HTMLElement).textContent;
    if (input != null) return input;
    return same;
  }

  isContactoValid(x: Contacto): boolean {
    return (
      x.relacion != 'nuevo' &&
      x.relacion != '' &&
      x.nombres != 'nuevo' &&
      x.nombres != '' &&
      x.apellidos != 'nuevo' &&
      x.apellidos != '' &&
      x.direccion != 'nuevo' &&
      x.direccion != '' &&
      x.email != 'nuevo' &&
      x.email != '' &&
      x.telefono != 'nuevo' &&
      x.telefono != '' &&
      x.id == ''
    );
  }
}
