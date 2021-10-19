import { Component, OnInit } from '@angular/core';
import { QuestionsElements } from '../../../../models/genenral.models'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  banner: QuestionsElements = {
    title:'Create Plan',
    paragraph: 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
