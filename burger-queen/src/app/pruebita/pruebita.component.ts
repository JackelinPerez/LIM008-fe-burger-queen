import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-pruebita',
  templateUrl: './pruebita.component.html',
  styleUrls: ['./pruebita.component.css']
})
export class PruebitaComponent implements OnInit {

  public documentId = null;
  public cats = [];
  public currentStatus = 1;
  public newCatForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(
    private firestoreService: FirestoreService
  ) {
    this.newCatForm.setValue({
      id: '',
      nombre: '',
      url: ''
    });
  }

  ngOnInit() {
    this.firestoreService.getCats('cats').subscribe((catsSnapshot) => {
      this.cats = [];
      catsSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      });
    });
  }

  public newCat(form, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.firestoreService.createCat('cats',data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newCatForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.firestoreService.updateCat('cats', documentId, data).then(() => {
        this.currentStatus = 1;
        this.newCatForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editCat(documentId) {
    let editSubscribe = this.firestoreService.getCat('cats', documentId).subscribe((cat) => {
      let propertiesCats = {};
      this.currentStatus = 2;
      this.documentId = documentId;
      propertiesCats = cat.payload.data();
      this.newCatForm.setValue({
        id: documentId,
        nombre: propertiesCats,
        url: propertiesCats
      });
      editSubscribe.unsubscribe();
    });
  }

  public deleteCat(documentId) {
    this.firestoreService.deleteCat('cats', documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }  

}
