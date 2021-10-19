import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateYourPlanRoutingModule } from './create-your-plan-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { StepsComponent } from './components/steps/steps.component'

@NgModule({
  declarations: [
    MainComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    CreateYourPlanRoutingModule,
    SharedModule
  ]
})
export class CreateYourPlanModule { }
