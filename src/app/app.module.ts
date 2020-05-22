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
import { PhotoPreviewDialogComponent } from './admin-cms/photo-preview-dialog/photo-preview-dialog.component';
import { EditPhotoDialogComponent } from './admin-cms/edit-photo-dialog/edit-photo-dialog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ChartsModule } from 'ng2-charts';
import { AddCategoryDialogComponent } from './admin-cms/add-category-dialog/add-category-dialog.component';
import { MailPreviewDialogComponent } from './admin-cms/mail-preview-dialog/mail-preview-dialog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TypingAnimationDirective } from 'angular-typing-animation'
import { NgxSpinnerModule } from "ngx-spinner";
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
    AddPhotoDialogComponent,
    PhotoPreviewDialogComponent,
    EditPhotoDialogComponent,
    ErrorPageComponent,
    AddCategoryDialogComponent,
    MailPreviewDialogComponent,
    TypingAnimationDirective
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
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
  entryComponents:[AddPhotoDialogComponent,MailPreviewDialogComponent,AddCategoryDialogComponent,EditPhotoDialogComponent,PhotoPreviewDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
