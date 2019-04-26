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
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatGridListModule } from '@angular/material';
import { BreakFastOrderComponent } from './break-fast-order/break-fast-order.component';
import { ListComponent } from './break-fast-order/list/list.component';

const moduleRouther : Routes = [
  { path: '', redirectTo: 'cats', pathMatch: 'full' },
  { path: 'breakFast', component: BreakFastOrderComponent},
  { path: 'cats', component: PruebitaComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    PruebitaComponent,
    NavMenuComponent,
    BreakFastOrderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(moduleRouther),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
