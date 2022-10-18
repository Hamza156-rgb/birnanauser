import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;

  sliderTwo: any;
  slideOptsTwo = {
    initialSlide: 2,
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };



  // NearStore =[
  //   {
  //     'image': '../assets/main/fruit.png',
  //     name: 'Fruits store'
  //   },
  //   {
  //     'image': '../assets/main/grocery.png',
  //     name: 'Grocery Store'
  //   },
  //   {
  //     'image': '../assets/main/toy.png',
  //     name: 'Toy Store'
  //   },
  //   {
  //     'image': '../assets/main/electronics.png',
  //     name: 'Electronics'
  //   },
  //   {
  //     'image': '../assets/main/other.png',
  //     name: 'Others'
  //   },
  
  // ]




  store = [
    {
      'image': '../assets/main/one.png',
      'storeName': 'Store 01'
    },
    {
      'image': '../assets/main/two.png',
      'storeName': 'Store 02'
    },
    {
      'image': '../assets/main/three.png',
      'storeName': 'Store 03'
    },
    {
      'image': '../assets/main/one.png',
      'storeName': 'Store 01'
    },
    {
      'image': '../assets/main/two.png',
      'storeName': 'Store 02'
    },
    {
      'image': '../assets/main/three.png',
      'storeName': 'Store 03'
    },
    {
      'image': '../assets/main/one.png',
      'storeName': 'Store 01'
    },
    {
      'image': '../assets/main/two.png',
      'storeName': 'Store 02'
    },
    {
      'image': '../assets/main/three.png',
      'storeName': 'Store 03'
    },

  ]

  constructor() { 
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      NearStore :[
        {
          'image': '../assets/main/fruit.png',
          name: 'Fruits store'
        },
        {
          'image': '../assets/main/grocery.png',
          name: 'Grocery Store'
        },
        {
          'image': '../assets/main/toy.png',
          name: 'Toy Store'
        },
        {
          'image': '../assets/main/electronics.png',
          name: 'Electronics'
        },
        {
          'image': '../assets/main/other.png',
          name: 'Others'
        },
      
      ]
    };

  }

  ngOnInit() {
    
  }
   slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
