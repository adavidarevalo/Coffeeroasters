import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-sumary',
  templateUrl: './orders-sumary.component.html',
  styleUrls: ['./orders-sumary.component.scss']
})
export class OrdersSumaryComponent implements OnInit {
  text: string = ''
  modal: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeModal(){
    this.modal = !this.modal
    console.log('text ', this.text)
  }

}
