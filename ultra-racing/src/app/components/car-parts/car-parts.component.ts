import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent /*implements OnInit*/ {

  //constructor() { }

  //ngOnInit() {}

  carParts = [
    {
      "id": 1,
      "name": "Super Tires",
      "description": "These tires are the very best",
      "inStock": 5,
      "price": 3.29
    },
    {
      "id": 2,
      "name": "Reinforced Shocks",
      "description": "Shocks made from kryptonite",
      "inStock": 4,
      "price": 4.99
    },
    {
      "id": 3,
      "name": "Reinforced Shocks XL",
      "description": "Made from kryptonite-Z",
      "inStock": 0,
      "price": 7.25
    }
  ];

  totalCarParts() {
    let sum = 0;
    /*for (let carPart of this.carParts) {
      sum += carPart.inStock;
    }
    return sum;*/
    //return this.carParts.reduce(function(prev, current) { return prev + current.inStock; }, 0 );
    return this.carParts.reduce((prev, current) => prev + current.inStock, 0 );
  }

}
