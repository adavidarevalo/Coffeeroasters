import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateYourPlanRoutingModule } from './create-your-plan-routing.module';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { StepsComponent } from './components/steps/steps.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsElementsComponent } from './components/questions-elements/questions-elements.component'
import { MaterialModule } from '../../material/material.module';
import { OrdersSumaryComponent } from './components/orders-sumary/orders-sumary.component' 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    StepsComponent,
    QuestionsComponent,
    QuestionsElementsComponent,
    OrdersSumaryComponent
  ],
  imports: [
    CommonModule,
    CreateYourPlanRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class CreateYourPlanModule { }
