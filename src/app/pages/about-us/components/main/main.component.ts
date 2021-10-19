import { Component, OnInit } from '@angular/core';
import { QuestionsElements } from '../../../../models/genenral.models'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bannerData = {
    image: './assets/images/about/image-hero-whitecup.jpg'
  }
  banner: QuestionsElements= {
    title: 'About Us',
    paragraph: 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
