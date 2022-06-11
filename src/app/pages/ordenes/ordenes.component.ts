import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Orden } from '../../models/models';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  ordenes: Orden[]=[];
  currentUrl:any='';

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private afs: FirestoreService
  ) { }

  ngOnInit() {
    //Cargando las ordenes
    this.loadOrdenes();

    this.dropdownList = this.getData();

  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getData(){
      return  [
        { item_id: 1, item_text: 'Biometría Hemática' },
        { item_id: 2, item_text: 'Hemoglobina' },
        { item_id: 3, item_text: 'Hematies' },
        { item_id: 4, item_text: 'Hematócrito' },
        { item_id: 5, item_text: 'Leucocitos' },
        { item_id: 4, item_text: 'Eritrosedimentación (VSG)' },
        { item_id: 5, item_text: 'Plaquetas' },
        { item_id: 6, item_text: 'Coombs Indirecto' },
        { item_id: 7, item_text: 'Grupo Sanguíneo ABO. Rh.' },
        { item_id: 8, item_text: 'Reticulocitos' },
        { item_id: 9, item_text: 'Paludismo' },
        { item_id: 10, item_text: 'Frotis (Sangre Periférico)' },
      ];
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
