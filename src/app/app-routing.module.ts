import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './eager/landing/landing.component';
import { Child1Component } from './eager/child1/child1.component';
import { Child2Component } from './eager/child2/child2.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"eager",component:LandingComponent,children:[
    {path:"",redirectTo:"child1",pathMatch:"full"},
    {path:"child1",component:Child1Component},
    {path:"child2",component:Child2Component},
    {path:"**",component:Child1Component}
  ]},
  {path:"lazy",loadChildren:()=>import('./lazy/lazy.module').then(
    m=>m.LazyModule
    )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
