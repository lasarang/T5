import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Alergia, Cirugia, Familiar, Inmunizacion, Medicacion, Personal} from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
})
export class HistoriaComponent implements OnInit {
  uid: string='';
  personales: Personal[]=[];
  familiares: Familiar[]=[];
  cirugias: Cirugia[]=[];
  alergias: Alergia[]=[];
  inmunizaciones: Inmunizacion[]=[];
  medicaciones: Medicacion[]=[];

  constructor(
      private authService: AuthService,
      private afs: FirestoreService
      ) {}

  ngOnInit() {

    this.loadPersonales();
    this.loadFamiliares();
    this.loadCirugias();
    this.loadAlergias();
    this.loadInmunizaciones();
    this.loadMedicaciones();
  }

  private loadPersonales(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          this.uid = auth.uid;
          return this.afs.getCollection('users/'+auth.uid+'/personales/')
        } else {
            return [];
        }
      })
    ).subscribe(personales =>{
      this.personales = personales as Personal[];
    });
  }

  private loadFamiliares(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/familiares/')
        } else {
            return [];
        }
      })
    ).subscribe(familiares =>{
      this.familiares = familiares as Familiar[];
    });
  }

  private loadCirugias(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/cirugias/')
        } else {
            return [];
        }
      })
    ).subscribe(cirugias =>{
      this.cirugias = cirugias as Cirugia[];
    });
  }

  private loadAlergias(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/alergias/')
        } else {
            return [];
        }
      })
    ).subscribe(alergias =>{
      this.alergias = alergias as Alergia[];
    });
  }

  private loadInmunizaciones(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/inmunizaciones/')
        } else {
            return [];
        }
      })
    ).subscribe(inmunizaciones =>{
      this.inmunizaciones = inmunizaciones as Inmunizacion[];
    });
  }

  private loadMedicaciones(){
    this.authService.userData.pipe(
      switchMap(auth => {
        if (auth) {
          return this.afs.getCollection('users/'+auth.uid+'/medicaciones/')
        } else {
            return [];
        }
      })
    ).subscribe(medicaciones =>{
      this.medicaciones = medicaciones as Medicacion[];
    });
  }
  onContentChanged(event : Event, same: string){
    const input= (event.target as HTMLElement).textContent;
    if(input !=null)
      return input;
    return same;
  }

  addTablePersonales() {
    const obj = {
      id: '',
      cie10: 'nuevo',
      antecedente: 'nuevo',
    };
    this.personales.push(obj);
  }

  deleteRowPersonales(x:Personal, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.personales.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/personales", x.id);
    }
    
  }

  updateRowPersonales(x:Personal) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id ==''){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/personales/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/personales/', x.id, x);
      }

    }
  }


  addTableFamiliares() {
    const obj = {
      id: '',
      cie10: 'nuevo',
      antecedente: 'nuevo',
    };
    this.familiares.push(obj);
  }

  deleteRowFamiliares(x:Familiar, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.familiares.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/familiares", x.id);
    }
    
  }

  updateRowFamiliares(x:Familiar) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' &&
         (x.cie10 != 'nuevo' && x.cie10 !='') &&
         (x.antecedente !='nuevo' &&  x.antecedente !='') 
      ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/familiares/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/familiares/', x.id, x);
      }

    }
  }

  addTableCirugias() {
    const obj = {
      id: '',
      cie10: 'nuevo',
      cirugia: 'nuevo',
    };
    this.cirugias.push(obj);
  }

  deleteRowCirugias(x:Cirugia, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.cirugias.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/cirugias", x.id);
    }
    
  }

  updateRowCirugias(x:Cirugia) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' &&
         (x.cie10 != 'nuevo' && x.cie10 !='') &&
         (x.cirugia !='nuevo' &&  x.cirugia !='') 
      ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/cirugias/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/cirugias/', x.id, x);
      }

    }
  }

  addTableAlergias() {
    const obj = {
      id: '',
      cie10: 'nuevo',
      alergia: 'nuevo',
    };
    this.alergias.push(obj);
  }

  deleteRowAlergias(x:Alergia, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.alergias.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/alergias", x.id);
    }
    
  }

  updateRowAlergias(x: Alergia) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/alergias/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/alergias/', x.id, x);
      }

    }
  }

  addTableInmunizaciones() {
    const obj = {
      id: '',
      vacuna: 'nuevo',
      descripcion: 'nuevo',
    };
    this.inmunizaciones.push(obj);
  }

  deleteRowInmunizaciones(x:Inmunizacion, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == ''){
        this.inmunizaciones.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/inmunizaciones", x.id);
    }
    
  }

  updateRowInmunizaciones(x:Inmunizacion) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/vacunas/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/vacunas/', x.id, x);
      }

    }
  }

  addTableMedicaciones() {
    const obj = {
      id: '',
      nombre: 'nuevo',
      finicio: 'nuevo',
    };
    this.medicaciones.push(obj);
  }

  deleteRowMedicaciones(x:Medicacion, i: any) {
    var delBtn = confirm('¿Está seguro de eliminar este registro?');
    if(delBtn == true){
      console.log("Eliminando doc...")

      if (x.id == '' ){
        this.medicaciones.splice(i, 1);
        return;
      }
      this.afs.deleteDoc("users/"+this.uid+"/medicaciones", x.id);
    }
    
  }

  updateRowMedicaciones(x:Medicacion) {
    var delBtn = confirm('¿Está seguro que desea guardar este registro?');
    if (delBtn == true) {
      if( x.id =='' &&
         (x.nombre != 'nuevo' && x.nombre !='') &&
         (x.finicio !='nuevo' &&  x.finicio !='') 
      ){
        console.log("Creando documento!")
        console.log('doc ->', x);
        this.afs.createDoc(x, 'users/'+this.uid+'/medicaciones/');
        
      }else if(x.id!=''){
        console.log("Actualizando documento!")
        console.log('doc ->', x);

        this.afs.updateDoc('users/'+this.uid+'/medicaciones/', x.id, x);
      }

    }
  }
}
