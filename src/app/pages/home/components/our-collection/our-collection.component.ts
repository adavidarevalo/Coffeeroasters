import { Component, OnInit } from '@angular/core';
import { ElementCollection } from '../../../../models/genenral.models'

@Component({
  selector: 'app-our-collection',
  templateUrl: './our-collection.component.html',
  styleUrls: ['./our-collection.component.scss']
})
export class OurCollectionComponent implements OnInit {
  ElementContainer: ElementCollection[] = [
    {
      image: './assets/images/home/image-gran-espresso.png',
      title:'Gran Espresso',
      paragraph: 'Light and flavorful blend with cocoa and black pepper for an intense experience.'
    },    
    {
      image: './assets/images/home/image-gran-espresso.png',
      title:'Gran Espresso',
      paragraph: 'Light and flavorful blend with cocoa and black pepper for an intense experience.'
    },
    {
      image: './assets/images/home/image-gran-espresso.png',
      title:'Gran Espresso',
      paragraph: 'Light and flavorful blend with cocoa and black pepper for an intense experience.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
