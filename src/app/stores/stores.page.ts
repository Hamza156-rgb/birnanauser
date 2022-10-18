import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  stores = [
    {
      'image': '../assets/stores/1.png',
      'name': 'Wallmart',
    },
    {
      'image': '../assets/stores/2.png',
      'name': 'Uni Mart',
    },
    {
      'image': '../assets/stores/3.png',
      'name': 'Justice',
    },
    {
      'image': '../assets/stores/4.png',
      'name': 'Jc Penny',
    },
    {
      'image': '../assets/stores/1.png',
      'name': 'Toy Shop',
    },
    {
      'image': '../assets/stores/2.png',
      'name': '7 Eleven',
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
