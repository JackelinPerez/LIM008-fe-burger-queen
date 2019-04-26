import { Injectable } from '@angular/core';
//se importa firestore para acceder a sus metodos
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  //Crea un nuevo gato
  public createCat(collectionId: string, data: any) {
    return this.firestore.collection(collectionId).add(data);
  }

  //Obtiene un gato
  public getCat(collectionId: string, documentId: string) {
    return this.firestore.collection(collectionId).doc(documentId).snapshotChanges();
  }

  //Obtiene todos los gatos
  public getCats(collectionId: string) {
    return this.firestore.collection(collectionId).snapshotChanges();
  }

  //Actualiza un gato
  public updateCat(collectionId: string, documentId: string, data: any) {
    return this.firestore.collection(collectionId).doc(documentId).set(data);
  }

  //Borra un gato
  public deleteCat(collectionId: string, documentId: string) {
    return this.firestore.collection(collectionId).doc(documentId).delete();
  }
}
