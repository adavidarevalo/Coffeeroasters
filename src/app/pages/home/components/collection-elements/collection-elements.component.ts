import { Component, OnInit, Input } from '@angular/core';
import { ElementCollection } from '../../../../models/genenral.models'

@Component({
  selector: 'app-collection-elements',
  templateUrl: './collection-elements.component.html',
  styleUrls: ['./collection-elements.component.scss']
})
export class CollectionElementsComponent implements OnInit {
  @Input() data: ElementCollection  = {
    image: '',
    title: '',
    paragraph: ''
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
