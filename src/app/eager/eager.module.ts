import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class EagerModule { }
