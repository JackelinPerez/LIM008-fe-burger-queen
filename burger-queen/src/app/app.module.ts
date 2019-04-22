import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*jperez*/
//Importamos los modulos de firebase, para hacer uso de metodos CRUD
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//importamos la llave de firebase
import { environment } from '../environments/environment';
import { PruebitaComponent } from './pruebita/pruebita.component';

//pruebitas
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PruebitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'cats', pathMatch: 'full' },
      { path: 'cats', component: PruebitaComponent }
    ]),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
