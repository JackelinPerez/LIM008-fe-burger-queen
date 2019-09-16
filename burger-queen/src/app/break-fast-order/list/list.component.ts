import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

//observando al rxjs
import {ObservablesService} from '../../services/observables.service';

/*Importando clase */
import { Models} from '../../models/models';

/*******/
import { MatTableDataSource, MatTable } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['text', 'add', 'cost', 'allCost', 'delete'];
  listMenu : any=[];
  listMenuAux : Models[] =[];

  @Input() public parentData;
  @ViewChild(MatTable) public table: MatTable<any>;

  getTotalCost(list: any) {
    return list.data.map(t => parseInt(t.cost)).reduce((acc, value) => {acc= acc + value; return acc}, 0);
  }
  constructor(public firestoreService: FirestoreService, public getMenuSelect: ObservablesService ) {
   }

  ngOnInit() {
    this.getMenuSelect.currentMenu.subscribe((dataMenu: Models) =>{
      this.listMenu.data = [];
      if(Object.keys(dataMenu).length>0){
        this.listMenu = new MatTableDataSource();
        this.listMenuAux.push(dataMenu);
        this.listMenu.data = this.listMenuAux;
        // console.log('Llego data de observable: '+this.listMenuAux);
        // this.listMenu.data.forEach((ele: Models)=>{
        //   console.log('item= '+ ele.text);
        // });
      }
    });
  }

}
