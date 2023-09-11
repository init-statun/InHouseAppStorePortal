import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironmentsRoutingModule } from './environments-routing.module';
import { EnvironmentsComponent } from './environments.component';


@NgModule({
  declarations: [
    EnvironmentsComponent
  ],
  imports: [
    CommonModule,
    EnvironmentsRoutingModule
  ]
})
export class EnvironmentsModule { }
