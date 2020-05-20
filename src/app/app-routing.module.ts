import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginCmsComponent },
  { path: 'panel', component: AdminCmsComponent },
  { path: 'portfolio', component: PortfolioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
