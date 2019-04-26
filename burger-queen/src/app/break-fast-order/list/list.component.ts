import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['item', 'cost'];

  public listMenu = [];
  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.listMenu.map(t => parseInt(t.data.valor)).reduce((acc, value) => {acc= acc + value; return acc}, 0);
  }

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getCats('desayuno').subscribe((listMenuSnapshot) => {
      this.listMenu = [];
      listMenuSnapshot.forEach((catData: any) => {
        this.listMenu.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
      console.log(this.listMenu);
    });
  }

}
