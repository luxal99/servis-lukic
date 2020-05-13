import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeyComponent } from './key/key.component';
import { TuningComponent } from './tuning/tuning.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
