import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bannerData = {
    image: './assets/images/about/image-hero-whitecup.jpg'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
