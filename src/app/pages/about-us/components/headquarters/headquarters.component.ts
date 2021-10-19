import { Component, OnInit } from '@angular/core';
import { HeadquartersData } from '../../../../models/genenral.models'

@Component({
  selector: 'app-headquarters',
  templateUrl: './headquarters.component.html',
  styleUrls: ['./headquarters.component.scss']
})
export class HeadquartersComponent implements OnInit {
  headquartersData: HeadquartersData[] = [
    {
      image: './assets/images/about/illustration-uk.svg',
      title: 'United Kingdom',
      address: '68 Asfordby Rd',
      city: 'Alcaston',
      neighborhood: 'Alcaston',
      phone: '+44 1241 918425'
    },
    {
      image: './assets/images/about/illustration-canada.svg',
      title: 'Canada',
      address: '1528 Eglinton Avenue',
      city: 'Toronto',
      neighborhood: 'Ontario M4P 1A6',
      phone: '+1 416 485 2997'
    },
    {
      image: './assets/images/about/illustration-australia.svg',
      title: 'Australia',
      address: '36 Swanton Street',
      city: 'Kewell',
      neighborhood: 'Victoria',
      phone: '+61 4 9928 3629'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
