import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TuningComponent } from './tuning/tuning.component';


const routes: Routes = [{ path: '', component: HomeComponent }, { path: 'tuning', component: TuningComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
