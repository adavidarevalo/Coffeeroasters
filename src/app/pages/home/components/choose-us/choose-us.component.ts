import { Component, OnInit } from '@angular/core';
import { ElementCollection } from '../../../../models/genenral.models'


@Component({
  selector: 'app-choose-us',
  templateUrl: './choose-us.component.html',
  styleUrls: ['./choose-us.component.scss']
})
export class ChooseUsComponent implements OnInit {

  ElementChoose: ElementCollection[] = [
    {
      image: './assets/images/home/icon-coffee-bean.svg',
      title: 'Best quality',
      paragraph:'Discover an endless variety of the world is best artisan coffee from each of our roasters.'
    },
    {
      image: './assets/images/home/icon-gift.svg',
      title: 'Exclusive benefits',
      paragraph:'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
      image: './assets/images/home/icon-truck.svg',
      title: 'Free shipping',
      paragraph:'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
