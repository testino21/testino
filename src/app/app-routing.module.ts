import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpecialComponent } from './special/special.component';

const routes: Routes = [
  {path: '**', redirectTo: "/home"},
  {path: "home", component:HomeComponent },
  {path: "special", component:SpecialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
