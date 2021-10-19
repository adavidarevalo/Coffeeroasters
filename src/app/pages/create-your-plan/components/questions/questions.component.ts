import { Component, OnInit } from '@angular/core';
import { questions } from '../../../../models/genenral.models'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  panelOpenState = false;
  QuestionsData: questions[]= [
    {
      title: 'How do you drink your coffee?',
      first:{
        title: 'Capsule',
        paragraph: 'Compatible with Nespresso systems and similar brewers'
      },
      second: {
        title: 'Filter',
        paragraph: 'For pour over or drip methods like Aeropress, Chemex, and V60'
      },
      third: {
        title: 'Espresso',
        paragraph: 'Dense and finely ground beans for an intense, flavorful experience'
      },
    },
    {
      title: 'What type of coffee?',
      first:{
        title: 'Single Origin',
        paragraph: 'Distinct, high quality coffee from a specific family-owned farm'
      },
      second: {
        title: 'Decaf',
        paragraph: 'Just lie regular coffee, except the caffeine has been removed'
      },
      third: {
        title: 'Blended',
        paragraph: 'Combination of two or three dark roasted beans of organic coffees'
      },
    },
    {
      title: 'How much would you like?',
      first:{
        title: '250g',
        paragraph: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
      },
      second: {
        title: '500g',
        paragraph: 'Perfect option for a couple. Yields about 40 delectable cups.'
      },
      third: {
        title: '1000g',
        paragraph: 'Perfect for offices and events. Yields about 90 delightful cups.'
      },
    },
    {
      title: 'Want us to grind them?',
      first:{
        title: 'Wholebean',
        paragraph: 'Best choice if you cherish the full sensory experience'
      },
      second: {
        title: 'Filter',
        paragraph: 'For drip or pour-over coffee methods such as V60 or Aeropress'
      },
      third: {
        title: 'Cafetiere',
        paragraph: 'Course ground beans specially suited for french press coffee'
      },
    },
    {
      title: 'How often should we deliver? ',
      first:{
        title: 'Every week',
        paragraph: '$7.20 per shipment. Includes free first-class shipping.'
      },
      second: {
        title: 'Every 2 weeks',
        paragraph: '$9.60 per shipment. Includes free priority shipping.'
      },
      third: {
        title: 'Every month',
        paragraph: '$12 per shipment. Includes free priority shipping.'
      },
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
