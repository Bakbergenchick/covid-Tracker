import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CovidComponent} from "./covid/covid-component/covid-component.component";

const routes: Routes = [
  {path: 'covid-info', component: CovidComponent},
  {path: '', redirectTo: '/covid-info', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
