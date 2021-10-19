import { Component, OnInit, Input } from '@angular/core';
import { ChooseData } from '../../../models/genenral.models'

@Component({
  selector: 'app-elements-container',
  templateUrl: './elements-container.component.html',
  styleUrls: ['./elements-container.component.scss']
})
export class ElementsContainerComponent implements OnInit {
  @Input() data: ChooseData = {
    number: 0,
    title: '',
    paragraph:''
  }
  @Input() changeColor: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
