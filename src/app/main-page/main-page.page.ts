import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  NearStore = [
    {
      'image': '../assets/product/1.png',
      name: 'Jc Penny'
    },
    {
      'image': '../assets/product/2.png',
      'name': 'Jc Penny'
    },
    {
      'image': '../assets/product/3.png',
      'name': 'Jc Penny'
    }
  ]

  store = [
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    },
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    },
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    },
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    },
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    },
    {
      'image': '../assets/product/4.png',
      'storeName': 'Store 1'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
