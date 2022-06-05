import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FirestoreService } from '../../services/firestore/firestore.service';
import { Contacto, Resumen, Usuario } from '../../models/models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: Usuario={
    cedula: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    email: '',

    //Info personal
    dob: '',
    groLegal: '',
    estadoCivil: '',
    seguro: '',
    ocupacion: '',
    discapacidad: '',
    gpoSanguineo:'',
    talla: 0,
    peso: 0,
    id: ''
  }

  resumen: Resumen = {
    consultas: 0,
    examenes: 0,
    medicamentos: 0,
    imagenes: 0,
  }

  contactos: Contacto[] = [];

  constructor(
    private authService: AuthService,
    private afs: FirestoreService,
    ) {    }

   ngOnInit() {
    //Cargando la informacion basica y personal del usuario
    this.loadUsuario();

    //Cargando los contactos
    this.loadContactos();

    //Cargando el resumen
    this.loadResumen();

  }

  private loadUsuario(){
      this.authService.userData.pipe(
          switchMap(auth => {
            if (auth) {
                return this.afs.getDoc('users', auth.uid);
            } else {
                return [];
            }
          })
      ).subscribe(user =>{
        this.usuario = user as Usuario;
      });
  }

  private loadContactos(){

    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
            return this.afs.getCollection('users/'+auth.uid+'/contactos/');
        } else {
            return [];
        }
      })
    ).subscribe(contactos =>{
      this.contactos = contactos as Contacto[];
    });
  }

  private loadResumen(){
    /* Resumen */
    this.resumen = {
      consultas: 20,
      examenes: 30,
      medicamentos: 10,
      imagenes: 5,
    }
  }
  

  /* Actualizar información */
  updateRowInfo() {
    var delBtn = confirm('¿Está seguro que desea guardar los datos?');
    if (delBtn == true) {
      console.log("Datos guardados!")
      this.afs.updateDoc("users",this.usuario.id,this.usuario); 
    }
  }

  /* CRUD contactos */

  addTableContactos() {
    this.contactos.push({
      id:'',
      relacion: 'nuevo',
      nombres: 'nuevo',
      apellidos: 'nuevo',
      direccion: 'nuevo',
      telefono: 'nuevo',
      email: 'nuevo'
    })
  }

  deleteRowContactos(x:Contacto, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.contactos.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.usuario.id+"/contactos", x.id);
    }
    
  }

  onContentChanged(event : Event, same: string){
    const input= (event.target as HTMLElement).textContent;
    if(input !=null)
      return input;
    return same;
  }

  updateRowContactos(x:Contacto) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' &&
         (x.relacion != 'nuevo' && x.relacion !='') &&
         (x.nombres !='nuevo' &&  x.nombres !='') &&
         (x.apellidos != 'nuevo' && x.apellidos !='') &&
         (x.direccion != 'nuevo' && x.direccion !='') &&
         (x.email != 'nuevo' && x.email !='') &&
         (x.telefono != 'nuevo' && x.telefono != '')
      ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.usuario.id+'/contactos/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.usuario.id+'/contactos/', x.id, x);
      }

    }
  }

}