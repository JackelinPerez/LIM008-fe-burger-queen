import { Component, OnInit, Input } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: string;
}

@Component({
  selector: 'app-break-fast-order',
  templateUrl: './break-fast-order.component.html',
  styleUrls: ['./break-fast-order.component.css']
})
export class BreakFastOrderComponent implements OnInit {
  public listMenu = [];
  // public parentData;
  // @Input ("parentData") public name;

  constructor(private firestoreService: FirestoreService) { }

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
          cols: 2,
          rows: 1,
          color: 'lightpink',
        });
      });
      console.log(this.listMenu);
    });
  }

  public sayHello(producto: string){
    console.log(producto);

  }  
}
