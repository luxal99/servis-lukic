import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AuthService } from './service/auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { KeyComponent } from './key/key.component';
import { TuningComponent } from './tuning/tuning.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'login', component: LoginCmsComponent },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'panel', component: AdminCmsComponent, canActivate: [AuthService]
  },
  {
    path: 'key', component: KeyComponent
  },
  {
    path: 'tuning', component: TuningComponent
  },
  {
    path: '**', component: ErrorPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
