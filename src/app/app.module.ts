import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeyComponent } from './key/key.component';
import { TuningComponent } from './tuning/tuning.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPhotoDialogComponent } from './admin-cms/add-photo-dialog/add-photo-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {  AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyComponent,
    TuningComponent,
    AdminCmsComponent,
    LoginCmsComponent,
    PortfolioComponent,
    FooterComponent,
    AddPhotoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsdW760wcZFFC0_yXO8EYzaX_oNuNq9CQ",
      authDomain: "servis-lukic.firebaseapp.com",
      databaseURL: "https://servis-lukic.firebaseio.com",
      projectId: "servis-lukic",
      storageBucket: "servis-lukic.appspot.com",
      messagingSenderId: "521991648329",
      appId: "1:521991648329:web:f0d280671912eeb2273b98",
      measurementId: "G-JL5DYEZD9M"
    }),
    MaterialModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [],
  entryComponents:[AddPhotoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
