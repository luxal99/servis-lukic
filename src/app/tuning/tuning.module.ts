import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuningComponent } from './tuning.component';

const routes: Routes = [
    { path: 'tuning', component: TuningComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TuningRoutingModule {

}

