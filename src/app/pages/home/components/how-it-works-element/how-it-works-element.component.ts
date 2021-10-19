import { Component, OnInit, Input } from '@angular/core';
import { ChooseData } from '../../../../models/genenral.models'

@Component({
  selector: 'app-how-it-works-element',
  templateUrl: './how-it-works-element.component.html',
  styleUrls: ['./how-it-works-element.component.scss']
})
export class HowItWorksElementComponent implements OnInit {
  @Input() data: ChooseData = {
    number: 0,
    title: '',
    paragraph:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
