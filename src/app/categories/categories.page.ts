import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [
    {
      'image': '../assets/Fruits category/1.png',
      'name': 'Avocado',
      'price': '$6.7'
    },
    {
      'image': '../assets/Fruits category/2.png',
      'name': 'Blueberry',
      'price': '$8.7'
    },
    {
      'image': '../assets/Fruits category/3.png',
      'name': 'Orange',
      'price': '$4.9'
    },
    {
      'image': '../assets/Fruits category/4.png',
      'name': 'Banana',
      'price': '$6.7'
    },
    {
      'image': '../assets/Fruits category/5.png',
      'name': 'Tomatoes',
      'price': '$4.9'
    },
    {
      'image': '../assets/Fruits category/6.png',
      'name': 'Grapes',
      'price': '$7.2'
    },
    {
      'image': '../assets/Fruits category/7.png',
      'name': 'Avocado',
      'price': '$6.7'
    },
    {
      'image': '../assets/Fruits category/8.png',
      'name': 'Blueberry',
      'price': '$8.7'
    },
    {
      'image': '../assets/Fruits category/9.png',
      'name': 'Orange',
      'price': '$4.9'
    },
    {
      'image': '../assets/Fruits category/10.png',
      'name': 'Banana',
      'price': '$7.2'
    },
    {
      'image': '../assets/Fruits category/11.png',
      'name': 'Tomatoes',
      'price': '$4.9'
    },
    {
      'image': '../assets/Fruits category/12.png',
      'name': 'Grapes',
      'price': '$7.2'
    },

  ]


  constructor() { }

  ngOnInit() {
  }

}
