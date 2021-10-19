import { Component, OnInit, Input } from '@angular/core';
import { HeadquartersData } from '../../../../models/genenral.models'

@Component({
  selector: 'app-headquarters-elements',
  templateUrl: './headquarters-elements.component.html',
  styleUrls: ['./headquarters-elements.component.scss']
})
export class HeadquartersElementsComponent implements OnInit {
  @Input() data: HeadquartersData =     {
    image: '',
    title: '',
    address: '',
    city: '',
    neighborhood: '',
    phone: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
