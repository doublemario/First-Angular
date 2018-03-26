import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {UserApiService} from './services/user-api.service';
import {HttpClientModule} from '@angular/common/http';
import {UserStorageService} from './services/user-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserApiService,UserStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
