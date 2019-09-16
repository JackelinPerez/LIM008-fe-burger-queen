import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
//Pasando data a Observable
import { ObservablesService} from '../services/observables.service';

/*Importando clase */
import { Models} from '../models/models';

@Component({
  selector: 'app-break-fast-order',
  templateUrl: './break-fast-order.component.html',
  styleUrls: ['./break-fast-order.component.css']
})
export class BreakFastOrderComponent implements OnInit {
  public listMenu = [];
  public selectItem = {};
  public selectItem2 = new Models;

  constructor(private firestoreService: FirestoreService, private getMenuSelect: ObservablesService) { 
  }

  ngOnInit() {
    this.firestoreService.getCats('desayuno').subscribe((listMenuSnapshot) => {
      this.listMenu = [];

      listMenuSnapshot.forEach((catData: any) => {
        const dataTemp = catData.payload.doc;
        this.listMenu.push({
          key: dataTemp.id,
          id: dataTemp.data().id,
          text: dataTemp.data().descripcion,
          img: dataTemp.data().img,
          cost: dataTemp.data().valor,
          cols: 2,
          rows: 1,
          color: 'lightpink',
        });
      });
    });
  }

  public sayHello(producto: Models){
    this.selectItem2 = producto;
    this.getMenuSelect.changeMenu(producto);
    console.log('producto: '+producto.text + '; costo: '+producto.cost);
    
  }
}
