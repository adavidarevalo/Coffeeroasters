import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { ElementsContainerComponent } from './components/elements-container/elements-container.component';
import { ArrowContainerComponent } from './components/arrow-container/arrow-container.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ElementsContainerComponent,
    ArrowContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ElementsContainerComponent,
    ArrowContainerComponent
  ]
})
export class SharedModule { }
