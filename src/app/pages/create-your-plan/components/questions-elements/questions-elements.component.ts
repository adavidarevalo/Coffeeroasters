import { Component, OnInit, Input } from '@angular/core';
import { QuestionsElements } from '../../../../models/genenral.models'
@Component({
  selector: 'app-questions-elements',
  templateUrl: './questions-elements.component.html',
  styleUrls: ['./questions-elements.component.scss']
})
export class QuestionsElementsComponent implements OnInit {
  @Input() data: QuestionsElements = {
    title:'',
    paragraph:''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
