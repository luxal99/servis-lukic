import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';
import { AuthService } from './service/auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginCmsComponent },
  {path:'panel',component:AdminCmsComponent,canActivate:[AuthService]},
  {path:'error',component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
