import { Component, OnInit } from '@angular/core';
import { ChooseData } from '../../../../models/genenral.models'


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  DataContainer: ChooseData[] =[
    {
      number: 1,
      title: 'Pick your coffee',
      paragraph: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      number: 2,
      title: 'Choose the frequency',
      paragraph: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
      number: 3,
      title: 'Receive and enjoy!',
      paragraph: 'Receive and enjoy! We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
