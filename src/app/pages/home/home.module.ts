import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { OurCollectionComponent } from './components/our-collection/our-collection.component';
import { CollectionElementsComponent } from './components/collection-elements/collection-elements.component';
import { ChooseUsComponent } from './components/choose-us/choose-us.component';
import { ChooseElementComponent } from './components/choose-element/choose-element.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HowItWorksElementComponent } from './components/how-it-works-element/how-it-works-element.component'
import { SharedModule } from '../../shared/shared.module';
import { BannerContainerComponent } from './components/banner-container/banner-container.component'

@NgModule({
  declarations: [
    MainComponent,
    OurCollectionComponent,
    CollectionElementsComponent,
    ChooseUsComponent,
    ChooseElementComponent,
    HowItWorksComponent,
    HowItWorksElementComponent,
    BannerContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
