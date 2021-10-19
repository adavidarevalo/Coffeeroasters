import { Component, OnInit, Input } from '@angular/core';
import { ElementCollection } from '../../../../models/genenral.models'

@Component({
  selector: 'app-choose-element',
  templateUrl: './choose-element.component.html',
  styleUrls: ['./choose-element.component.scss']
})
export class ChooseElementComponent implements OnInit {
  @Input() data: ElementCollection = {
    image: '',
    title: '',
    paragraph: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
