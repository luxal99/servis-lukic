import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeyComponent } from './key/key.component';
import { TuningComponent } from './tuning/tuning.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyComponent,
    TuningComponent,
    AdminCmsComponent,
    LoginCmsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
