import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { SharedModule } from '../../shared/shared.module'
import { MainComponent } from './components/main/main.component';
import { ElementInfoComponent } from './components/element-info/element-info.component';
import { HeadquartersComponent } from './components/headquarters/headquarters.component';
import { HeadquartersElementsComponent } from './components/headquarters-elements/headquarters-elements.component'

@NgModule({
  declarations: [
    MainComponent,
    ElementInfoComponent,
    HeadquartersComponent,
    HeadquartersElementsComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
