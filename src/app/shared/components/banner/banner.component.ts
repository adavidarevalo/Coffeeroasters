import { Component, OnInit, Input } from '@angular/core';
import { QuestionsElements } from '../../../models/genenral.models'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() data: QuestionsElements = {
    title:'',
    paragraph: ''
  }
  Create: boolean = false

  constructor() { }

  ngOnInit(): void {
    if(this.data.title === 'Create Plan'){
      this.Create = true
    }
  }
}