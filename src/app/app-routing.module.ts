import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginCmsComponent } from './login-cms/login-cms.component';
import { AdminCmsComponent } from './admin-cms/admin-cms.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginCmsComponent },
  {path:'panel',component:AdminCmsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
