import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Menu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  clickMenu(){
    this.Menu = !this.Menu
  }

}
